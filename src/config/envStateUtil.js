/*
 * @Author: poetryxie 
 * @Date: 2017-12-05 10:09:12 
 * @Last Modified by: poetryxie
 * @Last Modified time: 2017-12-22 15:53:21
 */

// import moment from 'moment'
import  {
	GetDate
} from '@/utils/getDate'

export const getInitEnvState = () => {
	let reportDate = window.localStorage.getItem('__REPORT_DATE__')

	if(!reportDate){
		reportDate = {
			beginDate : GetDate(-2).b,
			endDate   : GetDate(-2).e
		}
	}else{
		reportDate = JSON.parse(reportDate)
	}
	let envObject = {
		// customerId:'',
		adnetwork:null
		// adnetwork:null //不能填空字符串 null为广点通和应用宝 103应用 105广点通
	}
	return {
		reportDate,
		envObject
	}
}
