import React from 'react';
import "./HomePage.css";
import {Col, Row, Button, Parallax, Navbar, NavItem} from 'react-materialize';

const HomePage = () => (
    <div className={'homepageArea'}>

        <a className={'login'}   href='/login'>Login</a>
        <a className={'register'} href='/register'> Register </a>

        <Parallax className={"firstImage"} imageSrc="https://goo.gl/TtFhm7"/>




        <div className="onFirstImage section transparent center-align">
            <div className="row container">
                <h1 className="header">VISUAL SCHEDULER PRO</h1>
                <h3 >COVERAGE MADE SIMPLE</h3>
            </div>
        </div>
        <Parallax imageSrc="https://goo.gl/baB1kn"/>
        <div className="section onParallaxImage indigo darken-2 center-align">
            <div className="row container">
                <div className={"white-text"}> <h2>BUILT FOR BUSINESSES WHERE COVERAGE MATTERS</h2></div>
               <div className={"circle"}><img src="https://svgshare.com/i/5Eb.svg" alt=""/></div>
                <div className={"circle"}><img src="https://svgshare.com/i/5GT.svg" alt=""/></div>
                <div className={"circle"}><img src="https://svgshare.com/i/5Em.svg" alt=""/></div>
                <div className={"circle"}><img src="https://svgshare.com/i/5Fm.svg" alt=""/></div>
                <div className={"circle"}><img src="https://svgshare.com/i/5Fn.svg" alt=""/></div>
                <div className={"circle"}><img src="https://svgshare.com/i/5En.svg" alt=""/></div>
                <div className={"circle"}><img src="https://svgshare.com/i/5G9.svg" alt=""/></div>
                <div className={"circle"}><img src="https://svgshare.com/i/5GH.svg" alt=""/></div>

            </div>
        </div>
        <div className="onFirstImage section transparent center-align">
            <div className="row container">
                <h1 className="header">NEVER MISS A DAY OFF</h1>
                <h3 >BUILT IN REQUEST OFF LOG</h3>
            </div>
        </div>
        <Parallax imageSrc="https://goo.gl/TGqZhE"/>

    </div>
)

export default HomePage;