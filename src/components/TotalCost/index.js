import React, { Component } from 'react';
import { List } from 'antd-mobile';


class TotalCost extends Component {
    render() {
        const cost = '5123.66￥'
        return (
            <div>
                <List>
                    <List.Item extra={cost}>总消耗</List.Item>
                </List>
            </div>
        );
    }
}

export default TotalCost;