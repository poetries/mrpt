import * as ActionTypes from '@/constants'

export default (state = null,action) => {

	if(action.type === ActionTypes.MSG_SHOW){
		const {showType,msg} = action
		return {showType,msg}
	}else if(action.type === ActionTypes.MSG_INIT){
		return null
	}
	return state
}