import React, { Component } from 'react'
import { NavBar, Icon,WhiteSpace,Tabs } from 'antd-mobile';
import { Spin,Table } from 'antd';
import Chart from '@/components/Chart'
import DatePicker from '@/components/DatePicker'
import {connect} from 'react-redux'
import  {AdFields,reportColumn} from '@/config/AdField'
import ReactTable from 'react-table'
import {TableWrapper} from './style'
import {camelizeKeys} from 'humps'

export default class CustomerDetail extends Component {
  state = {
    mode: 'top',
    data:[],
    loading:false
  };
  handleList1(data,tab){
    const list = tab.getCustomerDetailList(data)
    console.log(list)
  }
  handleList2(data,tab){
    const list = tab.getCustomerDetailList(data)
  }
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
    const yyb = this.state.data.filter(v=>v.adnetwork===103)
    const gdt = this.state.data.filter(v=>v.adnetwork===105)

    const tabs = [
      { title: '应用宝',hide: yyb&&yyb.length!==0},
      { title: '广点通',hide: gdt&&gdt.length!==0}
    ].filter(v=>v.hide===true);

    const filterTabs = tabs.length!==0?tabs:[{ title: '应用宝'}]

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
                        <Chart/>
                        <TableWrapper><ReactTable {...tableConfig} data={yyb}/></TableWrapper>
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
                        <Chart/>
                        <TableWrapper><ReactTable {...tableConfig} data={gdt}/></TableWrapper>
                    </div>
             </Tabs>
      </div>
    )
  }
  componentDidMount(){
    fetch('https://easy-mock.com/mock/5a27ab137f2b435f137d0921/v1/cusomter-detail').then(v=>v.json()).then(data=>this.setState({data:camelizeKeys(data.data.list),loading:true}))
}
}
