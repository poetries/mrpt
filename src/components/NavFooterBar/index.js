import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Wrapper} from './style'
import {withRouter} from 'react-router-dom'
import {TabBar} from 'antd-mobile'


@withRouter
class NavFooterBar extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const {pathname} = this.props.location
        return (
            <Wrapper>
                <TabBar>
                    {this.props.data.map(v=>(
                        <TabBar.Item
                            key={v.path}
                            title={v.text}
                            icon={{uri: require(`./img/${v.icon}.png`)}}
                            selectedIcon={{uri: require(`./img/${v.icon}-active.png`)}}
                            selected={pathname===v.path}
                            onPress={()=>{
                            this.props.history.push(v.path)
                            }}
                            >
                        </TabBar.Item>
                    ))}
                </TabBar>
            </Wrapper>
        );
    }
}

export default NavFooterBar;