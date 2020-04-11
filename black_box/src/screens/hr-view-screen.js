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
        return (<Table bordered striped hover className='container'>
            <thead>
                <tr>
                    <th>Staff ID</th>
                    <th>Manager Name</th>
                    <th>Phase 1</th>
                    <th>Phase 2</th>
                    <th>Phase 3</th>
                    <th>Phase 4</th>
                    <th>Phase 5</th>
                    <th>Phase 6</th>
                    <th>Phase 7</th>

                </tr>
            </thead>
            <tbody>
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
        </Table >)
    }
}