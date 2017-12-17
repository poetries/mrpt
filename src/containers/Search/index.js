import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Wrapper} from './subpage/style'
import SearchInput from '@/components/SearchInput'
import History from './subpage/History'
import { List} from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import ListItem from '@/components/List'
import {connect} from 'react-redux'

import {
    fetchSeachConsumer,
    clearSearchHistory
} from '@/actions'

@connect(
    state=>state,
    {
        fetchSeachConsumer,
        clearSearchHistory
    }
)
@withRouter
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    state = {
        flag:true
    }
    handleSubmit(val){
        if (!val) return;
        this.props.fetchSeachConsumer(val)
    }
    render() {
        return (
            <Wrapper>
                <SearchInput handleSubmit={this.handleSubmit.bind(this)}/>
                {this.state.flag?<History clearSearchHistory={this.props.clearSearchHistory}/>:<ListItem />}
                
            </Wrapper>
        )
    }
    
}
