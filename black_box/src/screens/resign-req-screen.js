// to do -> redirect after Submit
import React, { Component } from 'react';
import {
  Container, Form, Row, Col,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from "react-toastify";
import {
  Card, CardTitle, CardText, CardColumns
} from 'reactstrap';
//import "react-toastify/dist/ReactToastify.css";

const API = 'http://localhost:8080/api/';
const SEARCH = 'users/search'

export class ResignReqScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courseId: '',
      instractourName: '',
      courseDesc: '',
      courseName: '',
      courseUrl: '',
      data: [],
    };
  }
  componentWillMount() {
    fetch('http://localhost:8080/api/resignations').then((res) => {
        res.json().then((data) => {
            this.setState({ data: data });
        })
    })
}

  onSearch = (e) => {
    e.preventDefault();
    fetch(API + SEARCH, {
      body: JSON.stringify({ courseName: this.state.courseName }),
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
      <Container>
        <h3>  </h3>
        <br></br>
        <ToastContainer />
        <Form >
          <Form.Group >
            <Form.Group className="p-2 border border-dark ">
              <Row >
                <Col><Form.Label>Search Courses</Form.Label></Col>
                <Col><Form.Control
                  name="courseName"
                  id="id"
                  placeholder="database"
                  className="form-control"
                  onChange={this.handleChange}
                /></Col>
                <Col>
                  <Button type="button" variant="dark" onClick={this.onSearch}>Search</Button>
                </Col>
              </Row>
            </Form.Group>
            </Form.Group>
        </Form>
        <CardColumns>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardTitle>Intro to Data-base</CardTitle>
              <CardText>Dr. Walaa</CardText>
              <CardText>This course teaching how to deal with databases</CardText>
              <Button variant="light">Apply</Button>
            </Card>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardTitle>Intro to Data-base</CardTitle>
              <CardText>Dr. Walaa</CardText>
              <CardText>This course teaching how to deal with databases</CardText>
              <Button variant="light">Apply</Button>
            </Card>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardTitle>Intro to Data-base</CardTitle>
              <CardText>Dr. Walaa</CardText>
              <CardText>This course teaching how to deal with databases</CardText>
              <Button variant="light" onClick={() => {
                                    window.open("https://www.google.com");
                                }}>Apply</Button>
            </Card>
            {
                    this.state.data.map((value, index) => {
                        return (
                                <Card key={index} body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                  <CardTitle>{value.courseName.status}</CardTitle>
                                  <CardText>{value.instractourName.status}</CardText>
                                  <CardText>{value.courseDesc.status}</CardText>
                                  <Button variant="light" onClick={() => {
                                    window.open(value.courseUrl.status);
                                }}>Apply</Button>
                                </Card>
                        )
                    })
                  }
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardTitle>Intro to Data-base</CardTitle>
              <CardText>Dr. Walaa</CardText>
              <CardText>This course teaching how to deal with databases</CardText>
              <Button variant="light">Apply</Button>
            </Card>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardTitle>Intro to Data-base</CardTitle>
              <CardText>Dr. Walaa</CardText>
              <CardText>This course teaching how to deal with databases</CardText>
              <Button variant="light">Apply</Button>
            </Card>
            
            
    </CardColumns>
      </Container>
    </>);
  }
}
