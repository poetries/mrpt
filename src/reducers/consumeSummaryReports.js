/*
 * @Author: poetryxie 
 * @Date: 2017-12-05 10:29:59 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-01-06 01:28:37
 */


import * as ActionTypes from '../constants'
import moment from 'moment'

const initialState = {
	fetching : false,
	error 	 : false
}

export default (state = initialState, action) => {
	const {beginDate, endDate} = action
	switch (action.type){
		case ActionTypes.FETCH_CONSUME_SUMMARY_REPORT_REQUEST:
			return {...state,fetching:true}
			
		case ActionTypes.FETCH_CONSUME_SUMMARY_REPORT_SUCCESS:
			const {response} = action
			return {
				...state,
				data: response,
				date: response.list.map(v=>moment(JSON.stringify(v.date)).format('YYYY/MM/DD'))
				
			}
		case ActionTypes.UPDATECHARTDATA:
			return {
				...state,
				seriesDataforEchart: action.seriesdata
			}
	}

	return state
}