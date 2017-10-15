/**
 * Created by 黄森 on 2017/10/14.
 */
import React from 'react';
import {Row, Col} from 'antd'
import {Menu, Icon} from 'antd'

export default class PCFooter extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="footer">
                        &copy;&nbsp;2016 ReactNews.All Rights Reserved
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
}