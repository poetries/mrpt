import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import DatePicker from '@/components/DatePicker'
import Chart from '@/components/Chart'

export default class CustomerDetail extends Component {
  render() {
    return (
      <div>
            点击top5排行榜展开客户详情
            <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent='广点通'
                >top5中的xx客户详情页</NavBar>
            <DatePicker />
            <Chart />
      </div>
    )
  }
}
