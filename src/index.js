import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Root from './containers/Root'
import configureStore from './store/configureStore';
import {getInitEnvState} from './config/envStateUtil'
import './config'
import 'antd-mobile/dist/antd-mobile.css';
import './index.css'

const reportDateStr = window.localStorage.getItem('__REPORTDATE__')

// const reportDate = reportDateStr ? JSON.parse(reportDateStr) : {
// 	beginDate :  '20190101',
// 	endDate   : '2019201'
// }

// const store = configureStore({
// 	reportDate,
// 	customerId: 1,
// 	adnetwork: 103
// });
// todo
const initState = getInitEnvState()
const store = configureStore({...initState})

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
