import React, { Component } from 'react'
import { List,WhiteSpace} from 'antd-mobile';
import {Link} from 'react-router-dom'
import { Progress } from 'antd';
import QueueAnim from 'rc-queue-anim';
import {Wrapper} from './style'

export default class Item extends Component {
  render() {
    return (
      <Wrapper>
          <QueueAnim delay={300}>  
            {this.props.data.length?this.props.data.map((v,index)=>(
              <Link to={`/customer-detail/${(Date.now())}`} key={index}>
                <List key={index}>
                    <List.Item extra={<div>
                      <Progress percent={v.sub}  showInfo={false} />
                      <span className='progress-desc'>￥{v.sub}00</span>
                    </div> }>{v.title}</List.Item>
                </List>
              </Link>  
            )):null
            }
          </QueueAnim>
      </Wrapper>
    )
  }
}
