import { Component } from "react";
import ReactDOM, { domNode } from "react-dom";
import "../../index.scss";
// const portalRoot = document.getElementById("portal");

export default class Portal extends Component {
  constructor(props) {
    super();
  }
  // componentDidMount = () => {
  //   portalRoot.appendChild(this.el);
  // };
  // componentWillUnmount = () => {
  //   portalRoot.removeChild(this.el);
  // };

  render() {
    return ReactDOM.createPortal(this.props.children, domNode);
  }
}
