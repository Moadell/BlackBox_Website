import React, { Component } from 'react';
import { Table } from 'reactstrap';


export class coursesView extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentWillMount() {
        fetch('http://localhost:8080/courses').then((res) => {
            res.json().then((data) => {
                this.setState({ data: data });
            })
        })
    }
    render() {
        return (
        <div>
        <h1>Available Courses </h1>
        
        <Table dark bordered striped hover className='container'>
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Course Instractour</th>
                    <th>Course Skills </th>
                </tr>
            </thead>
            <tbody>
{/*                 <tr onClick={() => {
                                    this.props.history.push(`/login`)
                                }}>
                    <th>Intro to Database</th>
                    <th>Dr. Walaa </th>
                    <th>MySQL</th>
                </tr>
 */}                {
                    this.state.data.map((value, index) => {
                        return (
                            <tr key={index} onClick={() => {
                                window.open(value.courseURL);
                            }}>
                               <td>{value.courseName} </td>
                                <td>{value.instructorName}</td>
                                <td>{value.courseSkils}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table >
        </div>);
    }
}