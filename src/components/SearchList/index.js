import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { List} from 'antd-mobile';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = [
            {title:'xx客户1',sub:'￥10000.0'},
            {title:'xx客户2',sub:'￥8000.0'},
        ]
        return (
            <div>
               {data.map((v,index)=>(
                    <List key={index}>
                        <List.Item extra={v.sub}>{v.title}</List.Item>
                    </List>
                ))}
            </div>
        )
    }
}
