import React, { Component } from 'react';
import { Table } from 'reactstrap';
import '../App.css';

export class recJobsView extends Component {
  constructor() {
    super();
    this.state = {
        data: []
    };
}

render() {
    return (
    <div>
    <h1>Recommended Jobs for You </h1>
    
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
                                window.open(`https://wuzzuf.net/jobs/p/290859-Mobile-Application-Developer-unilearn-Giza-Egypt?l=dbp&t=sij&o=1&a=S1|C|M|V2%22,%22__v`)
                            }}>
                <th>Mobile Application Developer</th>
                <th>Unilearn </th>
                <th>Software</th>
            </tr>
            <tr onClick={() => {
                                window.open(`https://wuzzuf.net/jobs/p/291291-Junior-Front-End-Developer-Cairo-Egypt?l=dbp&t=rj&o=2&a=S1|C|M|V2%22,%22__v`)
                            }}>
                <th>Junior Front End Developer</th>
                <th>Confidential Company </th>
                <th>Software, FronteEnd, Reactjs</th>
            </tr>
        </tbody>
    </Table >
    </div>);
}
}