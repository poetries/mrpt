import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import DatePicker from '@/components/DatePicker'
import Top5 from './subpage/Top5'
import Cost from './subpage/Cost'
import ListCard from './subpage/ListCard'
import {Wrapper} from './subpage/style'

export default class Home extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <Wrapper>
                <DatePicker />
                <Cost />
                <ListCard />
                <Top5 />
            </Wrapper>
        )
    }
}
