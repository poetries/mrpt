import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Wrapper} from './subpage/style'
import SearchInput from '@/components/SearchInput'
import History from './subpage/History'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    handleSubmit(val){
        if (!val) return;
        console.log(val)
    }
    render() {
        return (
            <Wrapper>
                <SearchInput handleSubmit={this.handleSubmit}/>
                <History />
            </Wrapper>
        )
    }
}
