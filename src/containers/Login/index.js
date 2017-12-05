import React, { Component } from 'react';
import LoginModal from '../../components/Login' 
import {doLogin, loadCode} from './subpage'

class Login extends Component {
    render() {
        return (
            <div>
                <LoginModal doLogin={doLogin} loadCode={loadCode}/>
            </div>
        );
    }
}

export default Login;