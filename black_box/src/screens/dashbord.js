// to do -> redirect after Submit
import React, { Component } from 'react';
import {
  Container, Form, Row, Col,
  Button,Image,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast} from "react-toastify";
import {
  Card, CardTitle, CardText, CardColumns
} from 'reactstrap';
//import "react-toastify/dist/ReactToastify.css";
//Sidebar
//import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap'; 

//import Sidebar from 'react-bootstrap-sidebar';

const API = 'http://localhost:8080/';
const SEARCH = '/'

export class dashbord extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      username:"",
      skills:"",
    };
  }
  componentWillMount() {
    fetch('http://localhost:8080/courses').then((res) => {
        res.json().then((data) => {
            this.setState({ data: data });
        })
    })
}

  onSearch = (e) => {
    e.preventDefault();
    fetch(API + SEARCH, {
      body: JSON.stringify({ id: this.state.courseName }),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
    })
      .then((response) => {
        if (response.status === 200) {

          return (response.json());
        } else {
          toast.error("Course not found");
          return undefined;
        }
      })
  }


  handleChange = e => {
    if (e.target.type === 'select-one') {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  render() {
    return (
      <>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <Col xs={6} md={4}>
        <Image src="sym.png" roundedCircle />
        </Col>
              <CardTitle>Welocme, {this.state.username}</CardTitle>
              <CardText>Skills, {this.state.skills}</CardText>
              <Row>
          <Col>
              <Button variant="info" size = "sm" onClick={() => {
                                    this.props.history.push(`/jobs`)
                                }} >Jobs</Button>
          <Button variant="danger" size = "sm" onClick={() => {
                                    this.props.history.push(`/login`)
                                }} >Logout</Button></Col>
            </Row>
            </Card>
      <Container className="themed-container" fluid={true}>
     
        <h3>  </h3>
        <br></br>
        <ToastContainer />
        <Form >
          <Form.Group >
            <Form.Group className="p-2 border border-dark ">
              <Row >
                <Col><Form.Control
                  name="courseName"
                  id="id"
                  placeholder="database"
                  className="form-control"
                  onChange={this.handleChange}
                /></Col>
                <Col>
                  <Button type="button" variant="dark" onClick={this.onSearch}>Search Courses</Button>
                </Col>
              </Row>
            </Form.Group>
            </Form.Group>
        </Form>
        <br></br>
        <CardColumns>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardTitle>Intro to Data-base</CardTitle>
              <CardText>By : Dr. Walaa</CardText>
              <CardText>This course teaching how to deal with databases</CardText>
              <CardText>Skills : MySQL, Queries</CardText>
              <Button variant="light">Explore</Button>
            </Card>
            {
                    this.state.data.map((value, index) => {
                        return (
                                <Card key={index} body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                  <CardTitle>{value.courseName}</CardTitle>
                                  <CardText>By : {value.instractourName}</CardText>
                                  <CardText>{value.courseDesc}</CardText>
                                  <CardText>Skills : {value.courseSkills}</CardText>
                                  <Button variant="light" onClick={() => {
                                    window.open(value.courseUrl);
                                }}>Explore</Button>
                                </Card>
                        )
                    })
                  }
            
            
    </CardColumns>
      </Container>
    </>);
  }
}
