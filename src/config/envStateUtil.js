/*
 * @Author: poetryxie 
 * @Date: 2017-12-05 10:09:12 
 * @Last Modified by: poetryxie
 * @Last Modified time: 2017-12-12 20:57:38
 */

// import moment from 'moment'
import  {
	getYesterday
} from '@/utils/getDate'

export const getInitEnvState = () => {
	let reportDate = window.localStorage.getItem('__REPORT_DATE__')

	if(!reportDate){
		reportDate = {
			beginDate : getYesterday().b,
			endDate   : getYesterday().e
		}
	}else{
		reportDate = JSON.parse(reportDate)
	}
	let envObject = {
		customerId:'',
		adnetwork:null
		// adnetwork:null //不能填空字符串
	}
	return {
		reportDate,
		envObject
	}
}
