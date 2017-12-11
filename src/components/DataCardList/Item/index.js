import React, { Component } from 'react'
import { List,WhiteSpace} from 'antd-mobile';

export default class Item extends Component {
  render() {
    return (
      <div>
          {this.props.data.length?this.props.data.map((v,index)=>(
              <List key={index}>
                  <List.Item extra={v.sub} >{v.title}</List.Item>
              </List>
          )):null
          }
      </div>
    )
  }
}
