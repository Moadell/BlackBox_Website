import React from "react";

import { Nav, Navbar } from 'react-bootstrap';


export class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      err: ""
    };
  }


  render() {
    return (
      <Navbar style={{ backgroundColor: "black",
                      height : "80"
      }} variant="dark"  >
        <Navbar.Brand href="/"> <img
        alt=""
        src="1.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Home
    </Navbar.Brand>
        <Nav className="mr-auto" >
          <Nav.Link href="/upload" >Jobs</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/hr-view">Courses</Nav.Link>
        </Nav>
      </Navbar>
    );

  }

}
