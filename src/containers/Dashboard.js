import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {fetchConsumeSummaryReports} from '../actions'

@connect(
  state=>state,
  {
    fetchConsumeSummaryReports
  }
)
export default class NotFindPage extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <h1>首页dashboard</h1>
      </div>
    )
  }
  componentDidMount(){
    console.log(this.props)
    this.props.fetchConsumeSummaryReports()
  }
}