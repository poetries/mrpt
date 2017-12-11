import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Item from './Item'

export default class List extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      }
    render() {
        const data = [
            {title:'xx客户1',sub:'￥10000.0'},
            {title:'xx客户2',sub:'￥8000.0'},
            {title:'xx客户3',sub:'￥7000.0'},
            {title:'xx客户4',sub:'￥6000.0'},
            {title:'xx客户5',sub:'￥5211.0'},
            {title:'xx客户6',sub:'￥5101.0'},
            {title:'xx客户7',sub:'￥5011.0'},
            {title:'xx客户8',sub:'￥4211.0'},
            {title:'xx客户9',sub:'￥3211.0'},
            {title:'xx客户10',sub:'￥3011.0'},
            {title:'xx客户11',sub:'￥3000.0'},
            {title:'xx客户12',sub:'￥2221.0'},
            {title:'xx客户13',sub:'￥2011.0'},
            {title:'xx客户14',sub:'￥1111.0'},
            {title:'xx客户15',sub:'￥222.0'},
        ]
        return (
            <div>
                <Item data={data} />
            </div>
        )
    }
}
