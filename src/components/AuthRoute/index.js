import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {doLogin, loadCode} from '../../containers/Login/subpage'

@withRouter
export default class AuthRoute extends Component {
    state = {
        login:false,
        status:200,
        code:1
    }
    render(){
        return null
    }
    componentDidMount(){
        const cookie = document.cookie
        if (cookie) {
            cookie.split(';').forEach(v => {
                console.log()
                if (v.indexOf('user_id') !== -1) {
                    const user_id = v.replace(/user_id=/, '')
                    user_id? this.props.history.push('/dashboard'):this.props.history.push('/login')
                }

            })
        } else {
            this.props.history.push('/login')
        }   

    }
}