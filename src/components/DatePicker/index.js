import React, { Component } from 'react'
import {TabFlex} from './style';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { DatePicker, List,Flex,Button,Tabs } from 'antd-mobile';
import {DateWrapper} from './style'
import {connect} from 'react-redux'
import  {
    getYesterday,
    getSevenDays,
    getThirtyDays
} from '@/utils/getDate'
import {
    changeReportDate
} from '@/actions'


const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

@connect(
    state=>state.consumeSummaryReports,
    {
      changeReportDate
    }
)
export default class TimerPicker extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const tabs = [
            { title: '昨天', sub: getYesterday() },
            { title: '最近7天', sub: getSevenDays() },
            { title: '最近30天', sub: getThirtyDays() }
          ];
         
        return (
            <div>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onTabClick={(tab, index) => { 
                        this.props.changeReportDate(tab.sub.b,tab.sub.e)
                     }}
                />
                {/* <Button type="ghost" inline size="small"  style={{ marginRight: '4px' }}>昨天</Button>
                <Button type="ghost" inline size="small" style={{ marginRight: '4px' }} >最近7天</Button>
                <Button type="ghost" inline size="small" >最近30天</Button> */}
                <DateWrapper>
                    <DatePicker
                        mode="date"
                        extra="Optional"
                        onChange={date => console.log(date)}
                    >
                    <Button type="primary" inline size="small" >自定义</Button>
                    </DatePicker>
                </DateWrapper>
            </div>
        )
    }
}
