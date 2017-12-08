import * as ActionTypes from '../constants/'
import {CALL_API} from '../middleware/api'

export const fetchConsumeConsumeReports = () => (dispatch,getState) =>{

	const {reportDate , envObject} = getState()
	const {customerId,adnetwork} = envObject
	const {beginDate,endDate} =reportDate
	return dispatch({
		reportDate,
		[CALL_API] : {
			endpoint : 'customer-consume-reports',
			types : [ActionTypes.FETCH_CONSUME_CONSUME_REPORT_REQUEST,
					ActionTypes.FETCH_CONSUME_CONSUME_REPORT_SUCCESS,
					ActionTypes.FETCH_CONSUME_CONSUME_REPORT_FAILURE
			],
			query : {
				data : {
					limit:5,
					order:'ASC',
					sortby:'cost',
					beginDate,
					endDate,
					customerId,
					adnetwork
				}
			}
		}
	})
}
