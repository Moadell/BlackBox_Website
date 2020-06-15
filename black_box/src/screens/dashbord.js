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
import querString from 'query-string';
//import "react-toastify/dist/ReactToastify.css";
//Sidebar
//import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap'; 

//import Sidebar from 'react-bootstrap-sidebar';

const API = 'http://localhost:8080/courses/search/';
export class dashbord extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      username:"",
      skills:"",
      courseName: "",
    };
  }
  componentWillMount() {
  let url = this.props.location.search;
  let params = querString.parse(url);
  this.state.username = params.username;
  this.state.skills = params.skills
  console.log("event", this.state.username, this.state.skills)
    fetch('http://localhost:8080/courses').then((res) => {
        res.json().then((data) => {
            this.setState({ data: data });
        })
    })
}

  onSearch = (e) => {
    e.preventDefault();
    console.log("event" , this.state);
    fetch(API + this.state.courseName , {
      method: 'GET',
    }).then((res,err) => {
      if(err){
        toast.error("Course not found");
      }
      else{
      res.json().then((data) => {
          this.setState({ data: data });
      })
    }
  })
  }


  handleChange = e => {
    this.setState({courseName: e.target.value});
    // if (e.target.type === 'select-one') {
    //   this.setState({courseName: e.target.value});
    // }
  }

  render() {
    return (
      <>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <Col xs={0} md={0}>
        <Image src="sym.png" roundedCircle />
        </Col>
              <CardTitle>Welocme, {this.state.username}</CardTitle>
              <CardText>Skills, {this.state.skills}</CardText>
              <Row>
          <Col>
              <Button variant="outline-info" size = "sm" onClick={() => {
                                    this.props.history.push(`/myjobs`)
                                }} >My Jobs</Button>
          <Button variant="outline-danger" size = "sm" onClick={() => {
                                    this.props.history.push(`/`)
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
           {/*  <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardTitle>Intro to Data-base</CardTitle>
              <CardText>By : Dr. Walaa</CardText>
              <CardText>This course teaching how to deal with databases</CardText>
              <CardText>Skills : MySQL, Queries</CardText>
              <Button variant="light">Explore</Button>
            </Card> */}
            {
                    this.state.data.map((value, index) => {
                        return (
                                <Card key={index} body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                  <CardTitle>{value.courseName}</CardTitle>
                                  <CardText>By : {value.instructorName}</CardText>
                                  <CardText>{value.courseDesc}</CardText>
                                  <CardText>Skills : {value.courseSkils}</CardText>
                                  <Button variant="light" onClick={() => {
                                    window.open(value.courseURL);
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
