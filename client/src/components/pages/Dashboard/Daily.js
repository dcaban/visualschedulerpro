import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';





export default class Daily extends Component {


    render() {
    return (

            <div>
                <Slider />
                <Range />
            </div>



    )
    }
}
