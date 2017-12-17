import React, { Component } from 'react'
import {Wrapper} from './style';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { List,WingBlank,Tag,Flex,Modal  } from 'antd-mobile';
import {Icon} from 'antd';

export default class SearchHistory extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        Modal.alert('', '清空历史记录?', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '清空', onPress: () => this.props.clearSearchHistory() },
        ])
    }
    render() {
        return (
            <Wrapper>
                <List>
                    <List.Item extra={<Icon type="delete" onClick={()=>this.handleClick()} />}>历史搜索</List.Item>
                </List>
                <div className="tag-container">
                  <Tag onChange={(e)=>console.log(e)}>省呗</Tag>
                </div>
            </Wrapper>
        )
    }
}
