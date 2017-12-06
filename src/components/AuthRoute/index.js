import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

@withRouter
export default class AuthRoute extends Component {
    render(){
        return null
    }
    componentDidMount(){
        const cookie = document.cookie
        if (cookie) {
            cookie.split(';').forEach(v => {
                // if (v.indexOf('user_id') !== -1) {
                //     const user_id = v.replace(/user_id=/, '')
                //     user_id? this.props.history.push('/dashboard'):this.props.history.push('/login')
                // }
            })
        } else {
            // this.props.history.push('/login')
        }   

    }
}