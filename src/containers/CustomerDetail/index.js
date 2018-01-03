import React, { Component } from 'react'
import { NavBar, Icon,WhiteSpace,Tabs } from 'antd-mobile';
import { Spin,Table } from 'antd';
import Chart from '@/components/Chart'
import DatePicker from '@/components/DatePicker'
import {connect} from 'react-redux'
import  {AdFields,reportColumn} from '@/config/AdField'
import ReactTable from 'react-table'
import {TableWrapper} from './style'

export default class CustomerDetail extends Component {
  state = {
    mode: 'top',
    data:[],
    loading:false
  };
  render() {
    const TabPane = Tabs.TabPane;
    const { mode } = this.state;
    
    const tableConfig = {
      noDataText: "暂无数据",
      data: this.state.data,
      className: "-striped -highlight",
      columns: reportColumn,
      defaultPageSize: 10,//通过判断今日 昨日 最近7日 最近30日显示数据
      loadingText: <Spin />,
      loading: !this.state.loading,
      showPaginationBottom: true,
      previousText: '上一页',
      nextText: '下一页',
      pageText: '页',
      ofText: '/',
      rowsText: '行',
      freezeWhenExpanded: true,
      // showPaginationTop: false,
      // showPageSizeOptions: true,
      // pageSizeOptions: [5, 10, 20, 25, 50, 100],
      // collapseOnDataChange: true,
      // freezeWhenExpanded: true,
      // filterable: false
    }
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
            <Tabs tabs={AdFields}
                initialPage={1}
                tabBarPosition="top"
                renderTab={tab => <span>{tab.header}</span>}
                >
            </Tabs>
             <Chart />
             <TableWrapper><ReactTable {...tableConfig} /></TableWrapper>
      </div>
    )
  }
  componentDidMount(){
    fetch('https://easy-mock.com/mock/5a27ab137f2b435f137d0921/v1/customer-consume-reports').then(v=>v.json()).then(data=>this.setState({data:data.data,loading:true}))
}
}
