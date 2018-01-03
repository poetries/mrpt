import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Root from './containers/Root'
import configureStore from './store/configureStore';
import {getInitEnvState} from './config/envStateUtil'
import './config/Interceptors'
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import 'react-table/react-table.css'
import './index.css'

const initState = getInitEnvState()
const store = configureStore({...initState})


ReactDOM.render(<Root store={store} />, document.getElementById('root'));
