import React, { Component } from 'react'
import { Icon,SearchBar,Flex } from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import {Wrapper} from './style'

@withRouter
export default class SearchInput extends Component {
  render() {
    return (
        <Wrapper>
            <Icon  
                type='left'
                size='md'
                onClick={()=>this.props.history.push('/customer')} 
            />
            <Flex.Item>
                <SearchBar 
                    placeholder="输入客户名称" 
                    maxLength={10} 
                    cancelText='搜索' 
                    showCancelButton={true} 
                    onCancel={this.props.handleSubmit}
                />
            </Flex.Item>
        </Wrapper>
    )
  }
}
