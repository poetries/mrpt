import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import './style';


@withRouter
export default class AuthRouter extends Component {
    state = {
        login:false,
        status:200,
        code:1
    }
    render(){
        return (
            <div>
               
            </div>
        )
    }
    componentDidMount(){
        const publicList = ['/login'];
        const pathname = this.props.location.pathname;
        console.log(pathname)
        if (publicList.indexOf(pathname)>-1) {
            return null;
        }
        if (this.state.status === 200 && this.state.status ==0) {
            this.props.history.push('/')
        } else {
            this.props.history.push('/login')
        }
    }
}