import React, { Component } from 'react'
import { NavBar, Icon,WhiteSpace,Tabs,Result } from 'antd-mobile';
import { Spin,Table } from 'antd';
import Chart from '@/components/Chart'
import DatePicker from '@/components/DatePicker'
import {connect} from 'react-redux'
import  {AdFields,reportColumn} from '@/config/AdField'
import ReactTable from 'react-table'
import {TableWrapper} from './style'
import {camelizeKeys} from 'humps'
import {chartOptions} from '@/config/chart'
import {convertEmptyValue} from '@/utils/caculate'

import {
  updateChartData,
  getCustomerDetailTestData
} from '@/actions'

@connect(
  state=>({
    customerDetailTestData:state.customerDetailTestData
  }),
  {
      updateChartData,
      getCustomerDetailTestData
  }
)
export default class CustomerDetail extends Component {
  state = {
    mode: 'top',
    data:[],
    loading:true,
    showList:[],
    label:'花费'
  };
  handleList1(data,tab){
    const list = tab.getCustomerDetailList(data)
    this.setState({label:tab.header})
    //把处理的数据存储到redux中
    this.props.updateChartData(list)
  }
  handleList2(data,tab){
    const list = tab.getCustomerDetailList(data)
  }
  render() {
    const TabPane = Tabs.TabPane;
    const { mode } = this.state;
    const noResult = <Result
      message={<div style={{marginBottom:50,fontSize:14}}>暂无数据</div>}
    />

    const {customerDetailTestData} = this.props
    const data = customerDetailTestData&&customerDetailTestData.data&&customerDetailTestData.data
    const xData = customerDetailTestData&&customerDetailTestData.date
    const seriesDataforEchart = customerDetailTestData&&customerDetailTestData.seriesDataforEchart
    const fetching = customerDetailTestData&&customerDetailTestData.fetching

    const yyb = data&&data.filter(v=>v.adnetwork===103)
    const gdt = data&&data.filter(v=>v.adnetwork===105)
    
    const tableConfig = {
      noDataText: "暂无数据",
      data: this.state.data,
      className: "-striped -highlight",
      columns: reportColumn,
      defaultPageSize: 10,
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
    

    const tabs = [
      { title: '应用宝',hide: yyb&&yyb.length!==0},
      { title: '广点通',hide: gdt&&gdt.length!==0}
    ].filter(v=>v.hide===true);

    const filterTabs = tabs.length!==0?tabs:[{ title: '应用宝'}]
    
    const chartObj = Object.assign({},chartOptions)
    chartObj.xAxis.data = xData || []
    
    chartObj.series = [
      {
          name : this.state.label, 
          type:'line',
          data : seriesDataforEchart,
          itemStyle:{
              normal:{
                  lineStyle:{
                      color:'#69b6efb0'
                  }
              }
          }
      }
  ]
  this.state.label.indexOf('率')!==-1?chartObj.yAxis = {
    axisLabel:{
      formatter:value=>`${value}%`
    }
  }:chartObj.yAxis = {
    axisLabel:{
      formatter:value=>{
        return value>=1000?`${value/1000}k`:value
      }
    }
  }

    const commonTableConfig = {
      noDataText: "暂无数据",
      data: yyb,
      className: "-striped -highlight",
      columns: reportColumn,
      defaultPageSize: 10,
      loadingText: <Spin />,
      loading: !this.state.loading,
      showPaginationBottom: false,
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
    const yybTableConfig = Object.assign({},{
      ...commonTableConfig,
      data: yyb,
      pageSize: yyb&&yyb.length>10?yyb.length:10
    })
    const gdtTableConfig = Object.assign({},{
      ...commonTableConfig,
      data: gdt,
      pageSize: gdt&&gdt.length>10?gdt.length:10
    })
    console.log(seriesDataforEchart)
    return (
      <div>
          <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={() => this.props.history.push(`/mrpt/dashboard`)}
                >{this.props.match.params.id}</NavBar>
            <DatePicker {...this.props}/>
            <WhiteSpace />
            <Tabs tabs={filterTabs}
                    initialPage={0}
                    tabBarPosition="top"
                    renderTab={tab => <span>{tab.title}</span>}
                >
                    <div style={{height:'auto',backgroundColor: 'rgb(238, 241, 246)' }}>
                        <WhiteSpace />  
                        <Tabs tabs={AdFields}
                            initialPage={0}
                            tabBarPosition="top" 
                            onTabClick={tab=>this.handleList1(yyb,tab)}
                            renderTab={tab => <span>{tab.header}</span>}
                            >
                        </Tabs>
                        {yyb&&yyb.length>0?<Chart data={chartObj}/>:noResult}
                        <WhiteSpace />
                        <WhiteSpace />
                        <WhiteSpace />
                        <TableWrapper><ReactTable {...yybTableConfig}/></TableWrapper>
                    </div>
                    <div style={{height:'auto',backgroundColor: 'rgb(238, 241, 246)' }}>
                        <WhiteSpace />  
                        <Tabs tabs={AdFields}
                                initialPage={0}
                                tabBarPosition="top"    
                                onTabClick={tab=>this.handleList2(gdt,tab)}
                                renderTab={tab => <span>{tab.header}</span>}
                                >
                        </Tabs>
                        {gdt&&gdt.length>0?<Chart data={chartObj}/>:noResult}
                        <WhiteSpace />
                        <WhiteSpace />
                        <WhiteSpace />
                        <TableWrapper><ReactTable {...gdtTableConfig} /></TableWrapper>
                    </div>
             </Tabs>
             
      </div>
    )
  }
  componentDidMount(){
    this.props.getCustomerDetailTestData()
  }
}
