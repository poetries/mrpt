/*
 * @Author: poetryxie 
 * @Date: 2017-12-05 10:09:12 
 * @Last Modified by: poetryxie
 * @Last Modified time: 2017-12-05 20:53:56
 */

import moment from 'moment'

export const getInitEnvState = () => {
	let reportDate = window.localStorage.getItem('__REPORTDATE__')

	if(!reportDate){
		reportDate = {
			beginDate : moment().format('YYYYMMDD'),
			endDate   : moment().format('YYYYMMDD')
		}
	}else{
		reportDate = JSON.parse(reportDate)
	}
	let envObject = {
		customerId:1,
		adnetwork:103
	}
	return {
		reportDate,
		envObject
	}
}
