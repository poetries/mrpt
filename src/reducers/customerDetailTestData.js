import * as ActionTypes from '../constants'
import moment from 'moment'
import {camelizeKeys} from 'humps'

const initialState = {
	fetching : false,
	error 	 : false
}

export default (state = initialState, action) => {
	switch (action.type){	
        case ActionTypes.FETCH_CUSTOMER_DETAIL_TEST_DATA:
			return {
                ...state,
                fetching : true,
				data: camelizeKeys(action.payload.list),
				date: camelizeKeys(action.payload.list).map(v=>moment(JSON.stringify(v.date)).format('YYYY/MM/DD'))
				
			}
		case ActionTypes.UPDATECHARTDATA:
			return {
				...state,
				seriesDataforEchart: action.seriesdata.map(v=>v==='-'?0:(String(v).indexOf('%')!==-1?String(v).replace(/%/g,''):v))
			}
			
	}

	return state
}