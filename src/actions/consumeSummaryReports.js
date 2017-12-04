import * as ActionTypes from '../constants/'
import CALL_API from '../middleware/api'

export const fetchConsumeSummaryReports = () => (dispatch,getState) =>{

	const {reportDate , envObject} = getState()
	const {customerId,adnetwork} = envObject
	const {beginDate,endDate} =reportDate
	return dispatch({
		reportDate,
		[CALL_API] : {
			types : [ActionTypes.FETCH_CONSUME_SUMMARY_REPORT_REQUEST,
					ActionTypes.FETCH_CONSUME_SUMMARY_REPORT_SUCCESS,
					ActionTypes.FETCH_CONSUME_SUMMARY_REPORT_FAILURE
			],
			query : {
				data : {
					beginDate,
					endDate,
					customerId,
					adnetwork
				}
			}
		}
	})
}
