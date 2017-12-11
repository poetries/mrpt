import React, { Component } from 'react'
import DataCardList from '@/components/DataCardList'
import { Accordion, List,Toast } from 'antd-mobile';
import {Wrapper} from './style'

export default class Item extends Component {
  onChange = (key) => {
    console.log(key);
  }
  render() {
    return (
      <Wrapper>
        {this.props.data?this.props.data.map((v,index)=>(
          <Accordion onChange={this.onChange}>
            <Accordion.Panel header={
              <List>
                <List.Item extra={v.sub}>{v.title}</List.Item>
              </List>
            }>
              <List>
                <List.Item>{<DataCardList />}</List.Item>
              </List>
            </Accordion.Panel>
          </Accordion>
        )):Toast.loading('加载中...',0) }
      </Wrapper>
    )
  }
}
