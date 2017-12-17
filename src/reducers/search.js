import * as ActionTypes from '../constants'

const initialState = {
	fetching : false,
	error 	 : false,
	searchHistory:[]
}
export default (state = initialState, action) => {
	switch (action.type){
		case ActionTypes.FETCH_SEARCH_CONSUMER_REQUEST:
			return {...state,fetching:true}
		case ActionTypes.FETCH_SEARCH_CONSUMER_SUCCESS:
			const {response} = action
			return {...state,data : response}
		case ActionTypes.SET_SEARCH_HISTORY:
			return {...state,searchHistory:[...state.searchHistory,action.payload]}
		case ActionTypes.CLEAR_SEARCH_HISTORY:
			return {...state,searchHistory:[]}
	}

	return state
}