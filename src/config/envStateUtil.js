/**
 * Created by zorochen on 2017/6/17.
 */
import {CAMPAIGNTYPE, DURATIONTYPE, BIZTYPE, BIZIDNAME} from './bizMapping'
import {camelizeKeys, decamelizeKeys} from 'humps'
import moment from 'moment'

const y = window.Y || {}
export const getInitEnvState = () => {
	let campaignType = CAMPAIGNTYPE.BID
	if(location.href.indexOf('campaignType=2') !== -1){
		campaignType = CAMPAIGNTYPE.AGREEMENT
	}
	let reportDate = window.localStorage.getItem('REPORT_DATE')
	if(!reportDate){
		reportDate = {
			beginDate : moment().format('YYYYMMDD'),
			endDate   : moment().format('YYYYMMDD')
		}
	}else{
		reportDate = JSON.parse(reportDate)
	}

	return {
		envState :{
			campaignType,
		},
		reportDate
	}
}
