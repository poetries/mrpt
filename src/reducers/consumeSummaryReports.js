/**
 * Created by zorochen on 2017/12/4.
 */

import * as ActionTypes from '../constants/'

export default (state = {
	fetching : false,
	error 	 : false
}, action) => {

	switch (action.type){
		case ActionTypes.FETCH_CONSUME_SUMMARY_REPORT_REQUEST :
			return {...state,fetching:true}

		case ActionTypes.FETCH_CONSUME_SUMMARY_REPORT_SUCCESS:
			const {response} = action

			return {...state,data : response}

	}

	return state
}