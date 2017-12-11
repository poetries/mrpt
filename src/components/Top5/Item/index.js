import React, { Component } from 'react'
import { List,WhiteSpace} from 'antd-mobile';
import {Link} from 'react-router-dom'

export default class Item extends Component {
  render() {
    return (
      <div>
          {this.props.data.length?this.props.data.map((v,index)=>(
            <Link to={`/customer-detail/${(Date.now())}`} key={index}>
              <List>
                  <List.Item extra={v.sub} >{v.title}</List.Item>
              </List>
            </Link>
          )):null
          }
      </div>
    )
  }
}
