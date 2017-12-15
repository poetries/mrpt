import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { DatePicker, List,Flex,Button,Tabs,WhiteSpace  } from 'antd-mobile';
import {Icon,Row,Col} from 'antd'
import {Wrapper,ModalWrapper,ButtonWrapper} from './style'
import {connect} from 'react-redux'
import moment from 'moment';
import  {
    getYesterday,
    getSevenDays,
    getThirtyDays,
    formatDate
} from '@/utils/getDate'


const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
export default class TimerPicker extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.ChangeDate = this.ChangeDate.bind(this)
        this.state = {
            date1:now,
            date2:now,
            modalVisible: false,
            beginDate:'',
            endDate:''
        }
    }
    ChangeDate(beginDate,endDate){
        const {
            changeReportDate,
            // fetchConsumeSummaryReports,
            fetchConsumeConsumeReports,
            fetchAdnetworkConsumeReports
        } = this.props

        changeReportDate(beginDate,endDate)
        // fetchConsumeSummaryReports()
        const pathname = window.location.pathname
        if (pathname==='/') {
            fetchConsumeConsumeReports()
        } else if (pathname==='/customer') {
            fetchConsumeConsumeReports('','')
        }
        fetchAdnetworkConsumeReports()
    }
    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }
    handleClick(){
        this.setModalVisible(true)
    }
    render() {
        const tabs = [
            { title: '昨天', sub: getYesterday() },
            { title: '最近7天', sub: getSevenDays() },
            { title: '最近30天', sub: getThirtyDays() },
            { title: '自定义', sub: 4 }
          ];
        
        return (
            <div>
                <Tabs tabs={tabs}
                            initialPage={0}
                            onTabClick={tab => {
                                if(tab.sub===4) {
                                    this.setModalVisible(true)
                                } else {
                                    this.ChangeDate(tab.sub.b,tab.sub.e)
                                }
                            }}
                         />
                <WhiteSpace />
                <ModalWrapper
                    title={<span style={{color:'#fff'}}>投放日期</span>}
                    style={{ top: -10}}
                    bodyStyle={{background:'#f5f5f9'}}
                    wrapClassName="投放日期"
                    maskClosable={false}
                    okText='完成'
                    closable={false}
                    cancelText={<Icon type="arrow-left" />}
                    maskStyle={{background:'#f5f5f9'}}
                    visible={this.state.modalVisible}
                    onOk={() => {
                        this.setModalVisible(false)
                        //this.ChangeDate(this.state.beginDate,this.state.endDate)
                    }}
                    onCancel={() => {
                        this.setModalVisible(false)
                    }}
                    >
                    <Wrapper>
                        <DatePicker
                            mode="date"
                            extra="Optional"
                            format
                            value={this.state.date1}
                            onChange={date1 => {
                                this.setState({ date1 })
                                this.setState({ beginDate:moment(date1).format('YYYYMMDD') })
                            }}
                        >
                        <List.Item arrow="horizontal">开始日期</List.Item>
                        </DatePicker>
                        <WhiteSpace />
                        <DatePicker
                            mode="date"
                            extra="Optional"
                            format
                            value={this.state.date2}
                            onChange={date2 => {
                                this.setState({ date2 })
                                this.setState({ endDate: moment(date2).format('YYYYMMDD')})
                            }}
                        >
                        <List.Item arrow="horizontal">结束日期</List.Item>
                        </DatePicker>
                    </Wrapper>
                </ModalWrapper>
                
            </div>
        )
    }
}