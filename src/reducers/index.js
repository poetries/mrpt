import {combineReducers} from 'redux';

export default combineReducers({
    consumeSummaryReports 				: require('./consumeSummaryReports').default,
    consumeConsumeReports 				: require('./consumeConsumeReports').default,
    SeachCustomers 			        	: require('./SeachCustomers').default,
    envObject                           : require('./envObject').default,
    reportDate                          : require('./reportDate').default,
    loginInfo                           : require('./loginInfo').default
})
