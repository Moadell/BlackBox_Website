import React, { Component } from 'react';
import { Table } from 'reactstrap';
import '../App.css';

export class jobsView extends Component {
  constructor() {
    super();
    this.state = {
        data: []
    };
}

componentWillMount() {
    fetch('http://localhost:8080/jobs').then((res) => {
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
                                window.open(`https://wuzzuf.net/jobs/p/f0c46fe7-33d8-40ff-a337-d3645e226f0c-Software-Quality-Engineer-Kick-Start-Interactive-Giza-Egypt?l=sp&t=sj&a=software+engineer%7Csearch-v3%7Chpb&o=4`)
                            }}>
                <th>Software Quality Engineer</th>
                <th>Kick Start Interactive Egypt </th>
                <th>MySQL, Scrum</th>
            </tr>
            {
                this.state.data.map((value, index) => {
                    return (
                        <tr key={index} onClick={() => {
                            window.open(value.jobUrl)
                        }}>
                            <td>{value.jobTitle}</td>
                            <td>{value.jobProvider}</td>
                            <td>{value.jobSkills}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </Table >
    </div>);
}
}