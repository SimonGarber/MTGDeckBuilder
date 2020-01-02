import decode from "jwt-decode";

export default class AuthService {
  constructor(domain) {
    this.domain = domain || "http://localhost:3001/api/v1/";
    this.fetch = this.fetch.bind(this);
    this.signin = this.signin.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }
  signin(email, password) {
    return this.fetch(`${this.domain}/signin`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => {
      this.setToken(res.token);
      return Promise.resolve(res);
    });
  }
  fetch(url, options) {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    if (this.signin()) headers["Authorization"] = `Bearer ${this.getToken()}`;

    return this.fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json());
  }
  getToken() {
    return localStorage.getItem("id_token");
  }
  setToken(idToken) {
    return localStorage.setItem("id_token", idToken);
  }
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 100) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  logout() {
    localStorage.removeItem("id_token");
  }
  getProfile() {
    return decode(this.getToken());
  }
  _checkStatus(response) {
    if (response.status >= 200 && response < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
}
