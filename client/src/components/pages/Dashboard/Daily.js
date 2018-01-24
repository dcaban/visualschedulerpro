import React, { Component } from "react";
// import ReactDOM from 'react-dom';
// import Slider, { Range } from 'rc-slider';
//
// import 'rc-slider/assets/index.css';
//



import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';


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

const marks = {
    '-10': '-10°C',
    0: <strong>0°C</strong>,
    26: '26°C',
    37: '37°C',
    50: '50°C',
    100: {
        style: {
            color: 'red',
        },
        label: <strong>100°C</strong>,
    },
};






export default class Daily extends Component {





    constructor(props) {
        super(props);
        this.state = {
            lowerBound: 20,
            upperBound: 40,
            value: [20, 40],
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



    render() {
    return (


        <div>
            <label>StartTime: </label>
            <input type="number" value={this.state.lowerBound} onChange={this.onLowerBoundChange} />
            <br />
            <label>EndTime: </label>
            <input type="number" value={this.state.upperBound} onChange={this.onUpperBoundChange} />
            <br />
            <button onClick={this.handleApply}>Apply</button>
            <br /><br />
            <Range allowCross={false} value={this.state.value} onChange={this.onSliderChange} />

                <Range min={0} max={24} defaultValue={[3, 10]} tipFormatter={value => `${value}:00`} />

            <h1>{this.state.value[0] + "  " + this.state.value[1]}</h1>
        </div>




    )
    }
}
