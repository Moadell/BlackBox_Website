import React, { Component } from 'react';
import { Table } from 'reactstrap';


export class HrViewScreen extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentWillMount() {
        fetch('http://localhost:8080/api/resignations').then((res) => {
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
                <tr onClick={() => {
                                    this.props.history.push(`/login`)
                                }}>
                    <th>Intro to Database</th>
                    <th>Dr. Walaa </th>
                    <th>MySQL</th>
                </tr>
                {
                    this.state.data.map((value, index) => {
                        return (
                            <tr key={index}>
                               <td>{value.staffId} </td>
                                <a href="/resignations-internal"> <td>{value.managerName}</td> </a>
                                <td>{value.data.phase1.status}</td>
                                <td>{value.data.phase2.status}</td>
                                <td>{value.data.phase3.status}</td>
                                <td>{value.data.phase4.status}</td>
                                <td>{value.data.phase5.status}</td>
                                <td>{value.data.phase6.status}</td>
                                <td>{value.data.phase7.status}</td>

                            </tr>
                        )
                    })
                }
            </tbody>
        </Table >
        </div>);
    }
}