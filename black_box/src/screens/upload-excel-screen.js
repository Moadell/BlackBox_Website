import React, { Component } from 'react';
import { Table } from 'reactstrap';
import '../App.css';

export class UploadExcelScreen extends Component {
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
    <h1>Available Jobs </h1>
    
    <Table dark bordered striped hover className='container'>
        <thead>
            <tr>
                <th>Job Title</th>
                <th>Job provider</th>
                <th>Job Required Skills</th>
            </tr>
        </thead>
        <tbody>
            <tr onClick={() => {
                                this.props.history.push(`https://wuzzuf.net/jobs/p/f0c46fe7-33d8-40ff-a337-d3645e226f0c-Software-Quality-Engineer-Kick-Start-Interactive-Giza-Egypt?l=sp&t=sj&a=software+engineer%7Csearch-v3%7Chpb&o=4`)
                            }}>
                <th>Software Quality Engineer</th>
                <th>Kick Start Interactive Egypt </th>
                <th>MySQL, Scrum</th>
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