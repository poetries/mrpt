import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { NavBar, Icon } from 'antd-mobile';
import DatePicker from '@/components/DatePicker'
import List from './subpage/List'
import {ContentWrapper,Wrapper} from './subpage/style'

export default class Customer extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <Wrapper>
                <NavBar
                    mode="dark"
                    rightContent={[
                        <Icon 
                            key="0" 
                            type="search" 
                            style={{ marginRight: '16px' }} 
                            onClick={()=>this.props.history.push('/search')} 
                        />,
                    ]}
                    >客户</NavBar>
                <ContentWrapper>
                    <DatePicker />
                    <List/>  
                </ContentWrapper>    
                
            </Wrapper>
        )
    }
}
