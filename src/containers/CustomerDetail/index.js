import React, { Component } from 'react'
import { NavBar, Icon,WhiteSpace } from 'antd-mobile';
import { Tabs, Radio } from 'antd';
import Chart from '@/components/Chart'
import DatePicker from '@/components/DatePicker'
import {connect} from 'react-redux'
import  {AdFields} from '@/config/AdField'

export default class CustomerDetail extends Component {
  state = {
    mode: 'top',
  };
  render() {
    const TabPane = Tabs.TabPane;
    const { mode } = this.state;
    
    return (
      <div>
          <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={() => this.props.history.push(`/mrpt/dashboard`)}
                rightContent='广点通'
                >{this.props.match.params.id}</NavBar>
            <DatePicker {...this.props}/>
            <WhiteSpace />
            <Tabs
              defaultActiveKey="1"
              tabPosition={mode}
              hideAdd={false}
            >
                {AdFields.map((v,index)=>(
                    <TabPane tab={v.title} key={index}></TabPane>
                ))}
             </Tabs>
             <Chart />
      </div>
    )
  }

}
