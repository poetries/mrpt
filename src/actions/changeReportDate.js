/*
 * @Author: poetryxie 
 * @Date: 2017-12-12 16:28:19 
 * @Last Modified by: poetryxie
 * @Last Modified time: 2017-12-12 16:34:22
 */

import {CALL_API} from '../middleware/api'
import * as ActionTypes from '../constants/'

export const changeReportDate = (beginDate,endDate) => {
	window.localStorage.setItem('__REPORT_DATE__',JSON.stringify({
		beginDate, endDate
	}))
	return{
		type : ActionTypes.CHANGE_REPORT_DATE,
		beginDate,
		endDate
	}
}