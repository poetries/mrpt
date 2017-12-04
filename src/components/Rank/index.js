import React, { Component } from 'react'
import './style';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class TimerPicker extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      }
    render() {
        return (
            <div>
                时间选择控件
            </div>
        )
    }
}
