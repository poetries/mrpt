import React, { Component } from 'react'
import { List,WhiteSpace,Button} from 'antd-mobile';
import {Icon} from 'antd';

export default class Item extends Component {
  state = {
    show:false
  }
  render() {
    return (
      <div>
          {this.props.data.length?(!this.state.show?this.props.data.slice(0,3).map((v,index)=>(
              <List key={index}>
                  <List.Item extra={v.sub} >{v.title}</List.Item>
              </List>
          )):
          this.props.data.slice(0,20).map((v,index)=>(
            <List key={index}>
                <List.Item extra={v.sub} >{v.title}</List.Item>
            </List>
        ))
        ):null
          }
          {this.props.data.length?<Button onClick={()=>{
              this.setState({show:!this.state.show})
          }}>
            {this.state.show
                ?<span>收起<Icon type='up' /></span>
                :<span>展开<Icon type='down' /></span>
            }
          </Button>:null
         }
      </div>
    )
  }
}
