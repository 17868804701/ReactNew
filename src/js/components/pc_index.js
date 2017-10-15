/**
 * Created by 黄森 on 2017/10/14.
 */
import React from 'react';
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
export default class PCIndex extends React.Component{
    render(){
        return (
          <div>
              <PCHeader></PCHeader>
              <PCFooter></PCFooter>

          </div>
        )
    }
}