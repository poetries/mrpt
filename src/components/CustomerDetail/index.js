import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import DatePicker from '@/components/DatePicker'
import Chart from '@/components/Chart'

export default class CustomerDetail extends Component {
  render() {
    return (
      <div>
            <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={() => this.props.history.push(`/dashboard`)}
                rightContent='广点通'
                >{this.props.match.params.id}</NavBar>
            <DatePicker />
            <Chart />
      </div>
    )
  }
}
