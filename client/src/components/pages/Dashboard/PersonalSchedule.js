import React, { Component } from "react";
import {Col, Row} from 'react-materialize';

export default class Daily extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col s={1} className='grid-example'>1</Col>
                    <Col s={1} className='grid-example'>2</Col>
                    <Col s={1} className='grid-example'>3</Col>
                    <Col s={1} className='grid-example'>4</Col>
                    <Col s={1} className='grid-example'>5</Col>
                    <Col s={1} className='grid-example'>6</Col>
                    <Col s={1} className='grid-example'>7</Col>
                    <Col s={1} className='grid-example'>8</Col>
                    <Col s={1} className='grid-example'>9</Col>
                    <Col s={1} className='grid-example'>10</Col>
                    <Col s={1} className='grid-example'>11</Col>
                    <Col s={1} className='grid-example'>12</Col>
                </Row>
            </div>
        );
    }
}
