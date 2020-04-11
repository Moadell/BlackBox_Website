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
        <Navbar.Brand href="/login"> <img
        alt=""
        src="1.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Home
    </Navbar.Brand>
        <Nav className="mr-auto" >
          <Nav.Link href="/upload" >Upload Excel</Nav.Link>
          <Nav.Link href="/resign">Resignation</Nav.Link>
          <Nav.Link href="/hr-view">HR View</Nav.Link>
        </Nav>
      </Navbar>
    );

  }

}
