import * as ActionTypes from '../constants'

const initialState = {
	fetching : false,
	error 	 : false
}
export default (state = initialState, action) => {
	switch (action.type){
		case ActionTypes.FETCH_SEARCH_CONSUMER_REQUEST:
			return {...state,fetching:true}
			
		case ActionTypes.FETCH_SEARCH_CONSUMER_SUCCESS:
			const {response} = action
			return {...state,data : response}
	}

	return state
}