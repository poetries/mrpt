import React, { Component } from 'react';
import { Tabs,WhiteSpace,Button } from 'antd-mobile';
import {Icon} from 'antd';
import Item from './Item'
import {Wrapper} from './Item/style'

class DataCardList extends Component {
    handleList() {
        return  [
            {'title': '消耗','sub':'2000￥'},
            {'title': '曝光','sub':'1000次'},
            {'title': '点击量','sub':'5000次'},
            {'title': '点击率(%)','sub':'20%'},
            {'title': 'CPC','sub':'1.0￥'},
            {'title': 'CTR','sub':'4.5￥'},
            {'title': '下载','sub':'5000次'},
            {'title': '下载成本','sub':'1.2￥'},
            {'title': '下载率(%)','sub':'0.5%'},
            {'title': '曝光下载率(%)','sub':'0.6%'},
            {'title': '激活','sub':'400次'},
            {'title': '激活成本','sub':'0.6￥'},
            {'title': '激活率(￥)','sub':'0.9%'},
            {'title': '注册','sub':'800次'},
            {'title': '注册成本','sub':'1.0￥'},
            {'title': '注册率(%)','sub':'0.3%'},
            {'title': '完件','sub':'500次'},
            {'title': '完件成本','sub':'0.5￥'},
            {'title': '完件率(%)','sub':'0.2%'},
            {'title': '授信','sub':'700次'},
            {'title': '授信成本','sub':'0.52￥'},
            {'title': '授信率(%)','sub':'0.42%'}
        ]
    }
    render() {
        const tabs = [
            { title: '应用宝', sub: '1' },
            { title: '广点通', sub: '2' }
        ];
        return (
            <Wrapper>
                <WhiteSpace />
                <Tabs tabs={tabs}
                    initialPage={0}
                    tabBarPosition="top"
                    renderTab={tab => <span>{tab.title}</span>}
                >
                    <div style={{height:'auto',backgroundColor: '#fff' }} ref='test'>
                        <Item data={this.handleList()}/>
                    </div>
                    <div style={{height:'auto',backgroundColor: '#fff' }}>
                        <Item data={this.handleList()}/>
                    </div>
                </Tabs>
                
            </Wrapper>
        );
    }

}

export default DataCardList;