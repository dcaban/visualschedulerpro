import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../../../constants";
import {Col, Input, Row, Button, Table} from 'react-materialize';


export default class Daily extends Component {

    //constructor with state set
    constructor(props) {
        super(props);
        let defaultValue = this.props.defaultValue || '';
        this.state = { value: defaultValue,  renderedValue: defaultValue};

    }


    //handler goes here for button click

    handleClick = () => {
        let dayOff =   document.getElementById("dayOff");

        console.log(dayOff);
    }





    render() {
        return (
            <div>
                <Row>
                        <Row>
                            <h1>Select day to request off</h1>
                        </Row>
                        <Row>
                            <Col s='4'>
                                <Input placeholder="Click to select date" name='on' type='date' id='dayOff'  onChange={function(e, value) {}} />
                            </Col>
                            <Col s='4'>
                            <Button floating large className='teal' waves='light' icon='add' onClick={this.handleClick} />
                            </Col>
                        </Row>
                    <Row>
                        <Table>
                            <thead>
                            <tr>
                                <th data-field="id">Name<a>  v</a></th>
                                <th data-field="name">Date Requested<a>  v</a></th>
                                <th data-field="price">Date Inputed <a>  v</a></th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>Alvin C</td>
                                <td>01/10/2018</td>
                                <td>1/31/2018 08:15</td>
                            </tr>
                            <tr>
                                <td>Alvin C</td>
                                <td>1/11/2018</td>
                                <td>1/31/2018 08:15</td>
                            </tr>
                            <tr>
                                <td>Jonathan</td>
                                <td>1/31/2018</td>
                                <td>1/31/2018 08:15</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Row>
            </div>
        );
    }
}
