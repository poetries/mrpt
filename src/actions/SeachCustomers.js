import * as ActionTypes from '../constants/'
import {CALL_API} from '../middleware/api'

export const fetchSeachConsumer = () => (dispatch,getState) =>{

	return dispatch({
		[CALL_API] : {
			endpoint : '/customers',
			types : [ActionTypes.FETCH_SEARCH_CONSUMER_REQUEST,
					ActionTypes.FETCH_SEARCH_CONSUMER_SUCCESS,
					ActionTypes.FETCH_SEARCH_CONSUMER_FAILURE
			],
			query : {
				data : {
					
				}
			}
		}
	})
}