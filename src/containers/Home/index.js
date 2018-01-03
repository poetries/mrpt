import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import DatePicker from '@/components/DatePicker'
import Top5 from './subpage/Top5'
import Cost from './subpage/Cost'
import ListCard from './subpage/ListCard'
import {connect} from 'react-redux'
import {Wrapper} from './subpage/style'
import  {
    GetDate,
    getSevenDays,
    getThirtyDays
} from '@/utils/getDate'
import {
    fetchConsumeSummaryReports,
    fetchConsumeConsumeReports,
    fetchSeachConsumer,
    changeReportDate
} from '@/actions'


@connect(
    state=>state.consumeSummaryReports,
    {
      fetchConsumeSummaryReports,
      fetchConsumeConsumeReports,
      fetchSeachConsumer,
      changeReportDate
    }
)
  
export default class Home extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {   

        return (
            <Wrapper>
                <DatePicker />
                <Cost data={this.props.data}/>
                <ListCard />
                <Top5 />
            </Wrapper>
        )
    }
    componentDidMount(){
        const time = GetDate(-1)
        this.props.changeReportDate(time.b,time.e)
        // this.props.fetchConsumeSummaryReports()
        // this.props.fetchConsumeConsumeReports()
        // this.props.fetchSeachConsumer()
    }
}
