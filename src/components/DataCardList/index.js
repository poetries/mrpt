import React, { Component } from 'react';
import { Tabs,WhiteSpace} from 'antd-mobile';
import Item from './Item'

class DataCardList extends Component {
    render() {
        const tabs = [
            { title: '应用宝', sub: '1' },
            { title: '广点通', sub: '2' }
        ];
        const data = [
            {'title': '消耗','sub':'2000￥'},
            {'title': '曝光','sub':'1000次'},
            {'title': '点击量','sub':'5000次'},
            {'title': '点击率(%)','sub':'20%'},
            {'title': '下载','sub':'5000次'},
            {'title': '下载成本','sub':'1.2￥'},
            {'title': 'CPC','sub':'1.0￥'},
            {'title': 'CTR','sub':'4.5￥'},
            {'title': '下载率(%)','sub':'0.5%'},
            {'title': '曝光下载率(%)','sub':'0.6%'},
            {'title': '激活','sub':'400次'},
            {'title': '激活成本','sub':'0.6￥'},
            {'title': '激活率(￥)','sub':'0.9%'},
            {'title': '注册','sub':'800次'},
            {'title': '注册陈本','sub':'1.0￥'},
            {'title': '注册率(￥)','sub':'0.3%'},
            {'title': '完件','sub':'500次'},
            {'title': '完件成本','sub':'0.5￥'},
            {'title': '完件率(%)','sub':'0.2%'},
            {'title': '授信','sub':'700次'},
            {'title': '授信成本','sub':'0.52￥'},
            {'title': '授信率(%)','sub':'0.42%'},
            
        ]
        return (
            <div>
                <WhiteSpace />
                <Tabs tabs={tabs}
                    initialPage={0}
                    tabBarPosition="top"
                    renderTab={tab => <span>{tab.title}</span>}
                >
                    <div style={{height:'176px',backgroundColor: '#fff' }}>
                        <Item data={data}/>                        
                    </div>
                    <div style={{height:'176px',backgroundColor: '#fff' }}>
                        <Item data={data}/>        
                    </div>
                </Tabs>
            </div>
        );
    }
}

export default DataCardList;