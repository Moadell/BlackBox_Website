import React from 'react';
import './login-screen.css'

export class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      err: ""
    };
  }
  login(e) {
    e.preventDefault();
    var username = e.target.elements.username.value;
    var password = e.target.elements.password.value;
    if (username === "admin" && password === "123") {
      this.props.history.push("./upload");
    } else {
      this.setState({
        err: "Invalid username or password"
      });
    }
  }

  render() {
    return (
      <>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <div class="split left">
        <div class="centered img">
        <img src="/LOGO 11.png" alt="BlackBox Logo"></img>
        </div>
        </div>

        <div class="split right">
        <div class="centered">
        <div className="App">
        <br />
        <h1>#Discovering_Technology</h1>
        <br></br>
        <h1>Welcome </h1>
        <br />
        <form method="post" onSubmit={this.login.bind(this)}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={this.handleChange}
          />
          <br />
          <div className="input-feedback">
            <span className="error">
              {this.state.err !== "" ? this.state.err : ""}
            </span>
          </div>

          <br />
          <input type="submit" value="Login" className="submit_btn" />
        </form>
      </div>
      </div>
    </div>
    </> 
    );
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
}

// export default Login;