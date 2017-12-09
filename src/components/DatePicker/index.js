import React, { Component } from 'react'
import './style';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { DatePicker,List,WingBlank, WhiteSpace} from 'antd-mobile';

const now = new Date(Date.now());

export default class TimerPicker extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    state = {
        date: now,
        time: now
    }
    render() {
        console.log(this.state.date)
        return (
            <WingBlank>
                <DatePicker
                    mode="date"
                    extra="自定义"
                    value={this.state.date}
                    onChange={date => this.setState({ date })}
                >
                    <List.Item arrow="horizontal">Date</List.Item>
                </DatePicker>
            </WingBlank>
        )
    }
}
