import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import styled from 'styled-components'
import {NavBar} from 'antd-mobile'
import {Route,Switch,Redirect} from 'react-router-dom'
import NavFooterBar from './NavFooterBar'
import Customer from '@/containers/Customer';
import Home from '@/containers/Home'
import {navList} from '@/config/routeRules'

export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const {pathname} = this.props.location
    const page = navList.find(v=>v.path===pathname)
    return (
      <div>
          {pathname ==='/'?<Redirect to='/dashboard' />:null}
          {page&&page.path==='/dashboard'?<NavBar className='fixd-header' mode='dard'>{page&&page.title}</NavBar>:''}
          <Switch>
                {navList.map(v=>(
                    <Route 
                        key={v.path} 
                        path={v.path} 
                        component={v.component}
                        exact={v.exact} 
                    />     
                ))}
                {/*任意路径都统一跳转到dashboard*/}
                <Redirect to='/dashboard' />
            </Switch>
           <NavFooterBar data={navList} />
      </div>
    )
  }
  componentDidMount(){
  }
}