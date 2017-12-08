import React, { Component } from 'react'
import RankTop5 from '@/components/Top5'
import CustomerDetail from '@/components/CustomerDetail'

export default class Top5 extends Component {
  render() {
    return (
      <div>
        <RankTop5 />
        <CustomerDetail />
      </div>
    )
  }
}
