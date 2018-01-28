import React, { Component } from "react";
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

import {Col, Row, Button, Input} from 'react-materialize';


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
};





function log(value) {
    console.log(value); //eslint-disable-line
    console.log("put into database")
}


let divStyle = {
    color: 'white',
    backgroundColor: '#273141 ',
    display: 'inline-block',
    width: "6.25%"

};
let divStyle2 = {
    color: 'white',
    backgroundColor: '#545F72 ',
    display: 'inline-block',
    width: "6.25%",


};




export default class Daily extends Component {





    constructor(props) {
        super(props);
        this.state = {
            lowerBound: 9,
            upperBound: 17,
            value: [9, 17],
            min: 7,
            max: 23,
        };
    }
    onLowerBoundChange = (e) => {
        this.setState({ lowerBound: +e.target.value });
    }
    onUpperBoundChange = (e) => {
        this.setState({ upperBound: +e.target.value });
    }
    onSliderChange = (value) => {
        log(value);
        this.setState({
            value,
        });
    }
    handleApply = () => {
        const { lowerBound, upperBound } = this.state;
        this.setState({ value: [lowerBound, upperBound] });
    }

    onMinChange = (e) => {
        this.setState({
            min: +e.target.value || 0,
        });
    }
    onMaxChange = (e) => {
        this.setState({
            max: +e.target.value || 100,
        });
    }





    render() {
    return (


        <div>
            {/*<Row>*/}

                {/*<Input label="Start of day" type="select" value={parseInt(this.state.min)} onChange={this.onMinChange}>*/}
                    {/*<option value='1'>1a</option>*/}
                    {/*<option value='2'>2a</option>*/}
                    {/*<option value='3'>3a</option>*/}
                    {/*<option value='4'>4a</option>*/}
                    {/*<option value='5'>5a</option>*/}
                    {/*<option value='6'>6a</option>*/}
                    {/*<option value='7'>7a</option>*/}
                    {/*<option value='8'>8a</option>*/}
                    {/*<option value='9'>9a</option>*/}
                    {/*<option value='10'>10a</option>*/}
                    {/*<option value='11'>11a</option>*/}
                    {/*<option value='12'>12p</option>*/}
                    {/*<option value='13'>1p</option>*/}
                    {/*<option value='14'>2p</option>*/}
                    {/*<option value='15'>3p</option>*/}
                    {/*<option value='16'>4p</option>*/}
                    {/*<option value='17'>5p</option>*/}
                    {/*<option value='18'>6p</option>*/}
                    {/*<option value='19'>7p</option>*/}
                    {/*<option value='20'>8p</option>*/}
                    {/*<option value='21'>9p</option>*/}
                    {/*<option value='22'>10p</option>*/}
                    {/*<option value='23'>11p</option>*/}
                    {/*<option value='24'>12a</option>*/}
                {/*</Input>*/}

                {/*<Input label="End of day" type="select" value={parseInt(this.state.max)} onChange={this.onMaxChange}>*/}
                    {/*<option value='1'>1a</option>*/}
                    {/*<option value='2'>2a</option>*/}
                    {/*<option value='3'>3a</option>*/}
                    {/*<option value='4'>4a</option>*/}
                    {/*<option value='5'>5a</option>*/}
                    {/*<option value='6'>6a</option>*/}
                    {/*<option value='7'>7a</option>*/}
                    {/*<option value='8'>8a</option>*/}
                    {/*<option value='9'>9a</option>*/}
                    {/*<option value='10'>10a</option>*/}
                    {/*<option value='11'>11a</option>*/}
                    {/*<option value='12'>12p</option>*/}
                    {/*<option value='13'>1p</option>*/}
                    {/*<option value='14'>2p</option>*/}
                    {/*<option value='15'>3p</option>*/}
                    {/*<option value='16'>4p</option>*/}
                    {/*<option value='17'>5p</option>*/}
                    {/*<option value='18'>6p</option>*/}
                    {/*<option value='19'>7p</option>*/}
                    {/*<option value='20'>8p</option>*/}
                    {/*<option value='21'>9p</option>*/}
                    {/*<option value='22'>10p</option>*/}
                    {/*<option value='23'>11p</option>*/}
                    {/*<option value='24'>12a</option>*/}
                {/*</Input>*/}
            {/*</Row>*/}
            <Row>

                <Col s={"2"}>
            <label>StartTime: </label>
            <Input type="select" value={parseInt(this.state.lowerBound)} onChange={this.onLowerBoundChange} >
                <option value='1'>1a</option>
                <option value='2'>2a</option>
                <option value='3'>3a</option>
                <option value='4'>4a</option>
                <option value='5'>5a</option>
                <option value='6'>6a</option>
                <option value='7'>7a</option>
                <option value='8'>8a</option>
                <option value='9'>9a</option>
                <option value='10'>10a</option>
                <option value='11'>11a</option>
                <option value='12'>12p</option>
                <option value='13'>1p</option>
                <option value='14'>2p</option>
                <option value='15'>3p</option>
                <option value='16'>4p</option>
                <option value='17'>5p</option>
                <option value='18'>6p</option>
                <option value='19'>7p</option>
                <option value='20'>8p</option>
                <option value='21'>9p</option>
                <option value='22'>10p</option>
                <option value='23'>11p</option>
                <option value='24'>12a</option>

            </Input>
            <label>EndTime: </label>
                    <Input type="select" value={parseInt(this.state.upperBound)} onChange={this.onUpperBoundChange}>
                        <option value='1'>1a</option>
                        <option value='2'>2a</option>
                        <option value='3'>3a</option>
                        <option value='4'>4a</option>
                        <option value='5'>5a</option>
                        <option value='6'>6a</option>
                        <option value='7'>7a</option>
                        <option value='8'>8a</option>
                        <option value='9'>9a</option>
                        <option value='10'>10a</option>
                        <option value='11'>11a</option>
                        <option value='12'>12p</option>
                        <option value='13'>1p</option>
                        <option value='14'>2p</option>
                        <option value='15'>3p</option>
                        <option value='16'>4p</option>
                        <option value='17'>5p</option>
                        <option value='18'>6p</option>
                        <option value='19'>7p</option>
                        <option value='20'>8p</option>
                        <option value='21'>9p</option>
                        <option value='22'>10p</option>
                        <option value='23'>11p</option>
                        <option value='24'>12a</option>
                    </Input>
                </Col>
            </Row>
            <Button onClick={this.handleApply}>Apply</Button>


            <Row className={"timeGrid"}>
                <div style={divStyle}>7a</div>
                <div style={divStyle2}>8a</div>
                <div style={divStyle}>9a</div>
                <div style={divStyle2}>10a</div>
                <div style={divStyle}>11a</div>
                <div style={divStyle2}>12p</div>
                <div style={divStyle}>1p</div>
                <div style={divStyle2}>2p</div>
                <div style={divStyle}>3p</div>
                <div style={divStyle2}>4p</div>
                <div style={divStyle}>5p</div>
                <div style={divStyle2}>6p</div>
                <div style={divStyle}>7p</div>
                <div style={divStyle2}>8p</div>
                <div style={divStyle}>9p</div>
                <div style={divStyle2}>10p</div>
            </Row>

        <Row>
            <Range allowCross={false} min={7} max={23} step={.25} value={this.state.value} onChange={this.onSliderChange} />
            </Row>

            <h1>{this.state.value[0] + "  " + this.state.value[1]}</h1>
        </div>




    )
    }

}
