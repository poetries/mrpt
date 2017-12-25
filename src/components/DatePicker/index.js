import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { DatePicker, List,Flex,Button,Tabs,WhiteSpace,InputItem  } from 'antd-mobile';
import {Icon,Row,Col} from 'antd'
import {Wrapper,ModalWrapper,ButtonWrapper,EnhanceRow} from './style'
import {connect} from 'react-redux'
import moment from 'moment';
import  {
    GetDate,
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
            beginDate:moment().format('YYYY-MM-DD'),
            endDate:moment().format('YYYY-MM-DD')
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
        if (pathname==='/mrpt/dashboard' || pathname.indexOf('customer-detail')!==-1) {
            fetchConsumeConsumeReports()
        } else if (pathname==='/mrpt/customer') {
            fetchConsumeConsumeReports('','')
        }
        pathname.indexOf('customer-detail')===-1?fetchAdnetworkConsumeReports():null
    }
    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }

    render() {
        const tabs = [
            { title: '前天', sub: GetDate(-2)},
            { title: '昨天', sub: GetDate(-1)},
            { title: '最近7天', sub: getSevenDays()},
            { title: '最近30天', sub: getThirtyDays()},
            { title: '自定义', sub: 5 }
          ];
        return (
            <div>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onTabClick={tab => {
                        if(tab.sub===5) {
                            this.setModalVisible(true)
                        } else {
                            this.setState({ date1:tab.sub.b,date2:tab.sub.e})
                            // this.ChangeDate(tab.sub.b,tab.sub.e)
                        }
                    }}
                />
                <WhiteSpace />
                <ModalWrapper
                    title={<span style={{color:'#fff'}}>投放日期</span>}
                    style={{ top: -10}}
                    // bodyStyle={{background:'#f5f5f9'}}
                    wrapClassName="投放日期"
                    maskClosable={false}
                    okText='完成'
                    closable={false}
                    cancelText={<Icon type="close" />}
                    // maskStyle={{background:'#f5f5f9'}}
                    visible={this.state.modalVisible}
                    onOk={() => {
                        this.setModalVisible(false)
                        this.ChangeDate(this.state.beginDate,this.state.endDate)
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
                            value={new Date(moment(this.state.date1).format('YYYY-MM-DD'))}
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
                            value={new Date(moment(this.state.date2).format('YYYY-MM-DD'))}
                            onChange={date2 => {
                                this.setState({ date2 })
                                this.setState({ endDate: moment(date2).format('YYYYMMDD')})
                            }}
                        >
                        <List.Item arrow="horizontal">结束日期</List.Item>
                        </DatePicker>
                    </Wrapper>
                </ModalWrapper>
               <EnhanceRow>
                    <List>
                        <List.Item 
                            extra={ <div>
                                <span style={{paddingRight:5}}>{moment(this.state.date2).format('YYYY-MM-DD')}</span><Icon type="calendar" />
                            </div>}
                        ><span>{moment(this.state.date1).format('YYYY-MM-DD')}</span></List.Item>
                    </List>        
                </EnhanceRow>      
                <WhiteSpace />
            </div>
        )
    }
}
