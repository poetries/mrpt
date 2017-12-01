import React, { Component } from 'react'
import './style';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class SearchHistory extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      }
    render() {
        return (
            <div>
                SearchHistory
            </div>
        )
    }
}
