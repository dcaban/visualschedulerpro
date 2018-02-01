import React, { Component } from "react";
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import "./NotHomePage.css";

import {Row} from 'react-materialize';



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
    width: "5%",
    height: "30px",

};
let divStyle2 = {
    color: 'white',
    backgroundColor: '#545F72 ',
    display: 'inline-block',
    width: "5%",
    height: "30px",


};
let spacer = {
    color: '#545F72',
    backgroundColor: '#545F72',
    display: 'inline-block',
    width: "20%",
    height: "30px",

};




export default class Slider1 extends Component {





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

    onSliderChange = (value) => {
        log(value);
        this.setState({
            value,
        });
    }





    render() {
        return (


            <div>
                <Row className={"sliderArea"}>

                    <div className={"name"}>
                        <p className={"startTimeEndTime"}>David Caban <br/>{this.state.value[0] + "-" + this.state.value[1] + " | "}
                            {this.state.value[1] - this.state.value[0] + " hr"}</p>
                    </div>

                    <div className={"mainDaily"}>



                        <Range allowCross={false} min={7} max={23} step={.25} value={this.state.value} onChange={this.onSliderChange} />


                    </div>
                </Row>

            </div>




        )
    }

}
