import React, { Component } from 'react'
import {Wrapper} from './style';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { List,WingBlank,Tag,Flex  } from 'antd-mobile';
import {Icon} from 'antd';

export default class SearchHistory extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <Wrapper>
                <List>
                    <List.Item extra={<Icon type="delete" onClick={()=>console.log(1)} />}>历史搜索</List.Item>
                </List>
                <div className="tag-container">
                  <Tag onChange={(e)=>console.log(e)}>省呗</Tag>
                </div>
            </Wrapper>
        )
    }
}
