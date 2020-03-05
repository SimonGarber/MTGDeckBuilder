import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Protected routes wrapper checks Auth state for tokens and redirects
// the user and rendering a redirect component at the signin page if the
// Do not have a token in the shared state object.

export default function withAuth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
        token: localStorage.getItem("token")
      };
    }

    componentDidMount() {
      fetch("/")
        .then(res => {
          if (res.status === 200) {
            this.setState({ loading: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
    }

    render() {
      const { loading, redirect, token } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/signin" />;
      } else if (token) {
        return <ComponentToProtect {...this.props} />;
      } else {
        return <Redirect to="/signin" />;
      }
    }
  };
}
