import React, { Component } from 'react';
import { Tabs,WhiteSpace,Button } from 'antd-mobile';
import {Icon} from 'antd';
import Item from './Item'
import {Wrapper} from './Item/style'

class DataCardList extends Component {
    state = {
        showList1:[],
        showList2:[],
        show1:false,
        show2:false
    }
    loadMoreFn1 = (num=2)=>{
        this.setState({showList1:this.handleList()&&this.handleList().slice(0,num)})
    }
    loadMoreFn2 = (num=2)=>{
        this.setState({showList2:this.handleList()&&this.handleList().slice(0,num)})
    }
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
                        <Item data={this.state.showList1}/>  

                        {this.state.showList1.length &&
                            <Button onClick={()=>{
                                this.setState({show1:!this.state.show1})
                                this.state.show1?this.loadMoreFn1(5):this.loadMoreFn1(20)
                            }}>
                                {this.state.show1
                                    ?<span>收起<Icon type='up' /></span>
                                    :<span>展开<Icon type='down' /></span>
                                }
                            </Button> 
                        }  
                    </div>
                    <div style={{height:'auto',backgroundColor: '#fff' }}>
                        <Item data={this.state.showList2}/> 

                        {this.state.showList1.length &&
                            <Button onClick={()=>{
                                this.setState({show2:!this.state.show2})
                                this.state.show2?this.loadMoreFn2(5):this.loadMoreFn2(20)
                            }}>
                                {this.state.show2
                                    ?<span>收起<Icon type='up'/></span>
                                    :<span>展开<Icon type='down'/></span>
                                }
                            </Button>  
                        }           
                    </div>
                </Tabs>
                
            </Wrapper>
        );
    }
    componentDidMount(){
        this.loadMoreFn1(4)
        this.loadMoreFn2(3)
    }
}

export default DataCardList;