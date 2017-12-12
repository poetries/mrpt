import * as ActionTypes from '@/constants'

export default (state = null,action) => {
	if(action.type === ActionTypes.CHANGE_REPORT_DATE){
		const {beginDate,endDate } = action

		return {beginDate,endDate}
	}
	return state
}