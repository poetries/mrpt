import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Tabs,WhiteSpace} from 'antd-mobile';
import Item from './Item'

export default class TimerPicker extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      }
    render() {
        const tabs = [
            { title: '消耗(元)', sub: '1' },
            { title: '点击量(次)', sub: '2' },
            { title: '点击率(%)', sub: '3' }
        ]
        const data = [
            {title:'xx客户1',sub:'￥5211.0'},
            {title:'xx客户2',sub:'￥5211.0'},
            {title:'xx客户3',sub:'￥5211.0'},
            {title:'xx客户4',sub:'￥5211.0'},
            {title:'xx客户5',sub:'￥5211.0'}
        ]
        return (
            <div>
                <WhiteSpace />
                <Tabs tabs={tabs}
                    initialPage={0}
                    tabBarPosition="top"
                    renderTab={tab => <span>{tab.title}</span>}
                >
                    <div style={{height:'270px',backgroundColor: '#fff' }}>
                        <Item data={data}/>                        
                    </div>
                    <div style={{height:'270px',backgroundColor: '#fff' }}>
                        <Item data={data}/>        
                    </div>
                    <div style={{height:'270px',backgroundColor: '#fff' }}>
                        <Item data={data}/>        
                    </div>
                </Tabs>
            </div>
        )
    }
}
