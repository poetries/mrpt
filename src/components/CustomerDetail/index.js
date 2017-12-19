import React, { Component } from 'react'
import { NavBar, Icon,WhiteSpace  } from 'antd-mobile';
import { Tabs, Radio } from 'antd';
import DatePicker from '@/components/DatePicker'
import Chart from '@/components/Chart'

const TabPane = Tabs.TabPane;
export default class CustomerDetail extends Component {
  state = {
    mode: 'top',
  };
  render() {
    const { mode } = this.state;
    return (
      <div>
          <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() => this.props.history.push(`/dashboard`)}
            rightContent='广点通'
            >{this.props.match.params.id}
          </NavBar>
          <DatePicker />
          <WhiteSpace />
          <Tabs
            defaultActiveKey="1"
            tabPosition={mode}
            style={{ height: 220 }}
            hideAdd={false}
          >
            <TabPane tab="曝光" key="1">1</TabPane>
            <TabPane tab="点击量" key="2">2</TabPane>
            <TabPane tab="点击率(%)" key="3">3</TabPane>
            <TabPane tab="下载" key="4">4</TabPane>
            <TabPane tab="下载成本" key="5">5</TabPane>
            <TabPane tab="下载率(%)" key="6">6</TabPane>
            <TabPane tab="曝光下载率(%)" key="7">7</TabPane>
            <TabPane tab="激活" key="8">8</TabPane>
            <TabPane tab="激活成本" key="9">9</TabPane>
            <TabPane tab="激活率(￥)" key="10">10</TabPane>
            <TabPane tab="注册" key="11">11</TabPane>
            <TabPane tab="注册成本" key="12">12</TabPane>
            <TabPane tab="注册率(%)" key="13">13</TabPane>
            <TabPane tab="完件" key="14">14</TabPane>
            <TabPane tab="完件成本" key="15">15</TabPane>
            <TabPane tab="完件率(%)" key="16">16</TabPane>
            <TabPane tab="授信" key="17">17</TabPane>
            <TabPane tab="授信成本" key="18">18</TabPane>
            <TabPane tab="授信率(%)" key="19">19</TabPane>
        </Tabs>
        <Chart />
      </div>
    )
  }
}
