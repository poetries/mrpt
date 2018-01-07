import {combineReducers} from 'redux';

export default combineReducers({
    consumeSummaryReports 				: require('./consumeSummaryReports').default,
    consumeConsumeReports 				: require('./consumeConsumeReports').default,
    customerDetailTestData 				: require('./customerDetailTestData').default,
    search 			        	        : require('./search').default,
    envObject                           : require('./envObject').default,
    reportDate                          : require('./reportDate').default,
    loginInfo                           : require('./loginInfo').default
})
