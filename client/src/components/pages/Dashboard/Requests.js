import React, { Component } from "react";
import {Col, Input, Row, Button, Table} from 'react-materialize';

export default class Daily extends Component {

    render() {
        return (
            <div>
                <Row>
                        <Row>
                            <h1>Select day to request off</h1>
                        </Row>
                        <Row>
                            <Col s='4'>
                                <Input placeholder="Click to select date" name='on' type='date' onChange={function(e, value) {}} />
                            </Col>
                            <Col s='4'>
                            <Button floating large className='teal' waves='light' icon='add' />
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
