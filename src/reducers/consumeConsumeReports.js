/*
 * @Author: poetryxie 
 * @Date: 2017-12-05 10:29:59 
 * @Last Modified by: poetryxie
 * @Last Modified time: 2017-12-07 10:19:46
 */


import * as ActionTypes from '../constants'

const initialState = {
	fetching : false,
	error 	 : false
}
export default (state = initialState, action) => {
	switch (action.type){
		case ActionTypes.FETCH_CONSUME_CONSUME_REPORT_REQUEST:
			return {...state,fetching:true}
			
		case ActionTypes.FETCH_CONSUME_CONSUME_REPORT_SUCCESS:
			const {response} = action
			return {...state,data : response}
	}

	return state
}