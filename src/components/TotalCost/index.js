import React, { Component } from 'react';
import { List } from 'antd-mobile';


class TotalCost extends Component {
    render() {
        const totalCost = this.props.data&&this.props.data.list.filter(v=>v.cost!=='-').reduce((prev,next)=>({
            cost:parseFloat(prev.cost)+parseFloat(next.cost)
        }),{cost:0}).cost.toFixed(2)
        
        return (
            <div>
                <List>
                    <List.Item extra={`${totalCost}￥`}>总消耗</List.Item>
                </List>
            </div>
        );
    }
}

export default TotalCost;