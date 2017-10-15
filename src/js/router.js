/**
 * Created by 黄森 on 2017/10/14.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Button } from 'antd';
import PCIndex from './components/pc_index'
import MobileIndex from './components/mobile_index'
import MediaQuery from 'react-responsive'
import 'antd/dist/antd.css';
import {Router,Route,hashHistory}from 'react-router';
import PCHeader from "./components/pc_index";

export default class Root extends React.Component{
    render(){
        return (
            <div>
                <MediaQuery query="(min-device-width:1224px)">
                    <PCIndex/>
                </MediaQuery>
                <MediaQuery query="(max-device-width:1224px)">
                    <MobileIndex/>
                </MediaQuery>
            </div>
        )
    }
}
ReactDom.render(<Root/>,document.getElementById("mainContainer"));