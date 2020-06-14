import React from 'react';
import './login-screen.css'

export class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:"",
      err: ""
    };
  }
  login = (e) => {
    console.log(this.state.username, this.state.password);
    e.preventDefault();
    fetch('http://localhost:8080/users/login', {
      body: JSON.stringify({ username:this.state.username, password:this.state.password }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        'content-type': 'application/json'
      },
      method: 'POST',
    })
      .then((response) => {
        if (response.status === 201) {
          console.log("Wasllna")
          this.props.history.push("/");
          return (response.json());
        } else {
          this.setState({
            err: "Invalid username or password"
          });
        }
      })
    }
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
  render() {
    return (
      <>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <div className="split left">
        <div className="centered img">
        <img src="/LOGO 11.png" alt="BlackBox Logo"></img>
        </div>
        </div>

        <div className="split right">
        <div className="centered">
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
          <input type="submit" value="Login" className="submit_btn" onClick={this.login} />
        </form>
      </div>
      </div>
    </div>
    </> 
    );
  }
}

// export default Login;