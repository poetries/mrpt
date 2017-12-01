import React, { Component } from 'react'
import './style';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class CustomerDetail extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      }
    render() {
        return (
            <div>
                客户列表详情页
            </div>
        )
    }
}
