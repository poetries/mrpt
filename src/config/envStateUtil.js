/*
 * @Author: poetryxie 
 * @Date: 2017-12-05 10:09:12 
 * @Last Modified by: poetryxie
 * @Last Modified time: 2017-12-06 15:29:19
 */

import moment from 'moment'

export const getInitEnvState = () => {
	let reportDate = window.localStorage.getItem('__REPORTDATE__')

	if(!reportDate){
		reportDate = {
			beginDate : '20170806',
			endDate   : moment().format('YYYYMMDD')
		}
	}else{
		reportDate = JSON.parse(reportDate)
	}
	let envObject = {
		customerId:'',
		adnetwork:103
	}
	return {
		reportDate,
		envObject
	}
}
