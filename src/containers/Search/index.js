import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Wrapper} from './subpage/style'
import SearchInput from '@/components/SearchInput'
import History from './subpage/History'
import { List} from 'antd-mobile';
import {withRouter} from 'react-router-dom'

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
        console.log(val)
        this.setState({
            flag:!this.state.flag
        })
        // this.props.history.push(`/search/${Date.now()}`)
    }
    render() {
       
        return (
            <Wrapper>
                <SearchInput handleSubmit={this.handleSubmit.bind(this)}/>
                {this.state.flag?<History />:null}
                
            </Wrapper>
        )
    }
}
