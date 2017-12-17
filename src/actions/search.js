import * as ActionTypes from '../constants/'
import {CALL_API} from '../middleware/api'
import {saveSearch, clearSearch, deleteSearch,} from '@/utils/cache'

export const fetchSeachConsumer = (keyword) => (dispatch,getState) =>{

	dispatch({
        type:ActionTypes.SET_SEARCH_HISTORY,
		payload:keyword
	})
	// return dispatch({
	// 	[CALL_API] : {
	// 		endpoint : '/customers',
	// 		types : [ActionTypes.FETCH_SEARCH_CONSUMER_REQUEST,
	// 				ActionTypes.FETCH_SEARCH_CONSUMER_SUCCESS,
	// 				ActionTypes.FETCH_SEARCH_CONSUMER_FAILURE
	// 		],
	// 		query : {
	// 			data : {
					
	// 			}
	// 		}
	// 	}
	// })
}


// export const saveHistory = (data)=>{
//     return {
//         type:ActionTypes.SET_SEARCH_HISTORY,
//         payload:{
//             data
//         }
//     }
// }

export const  clearSearchHistory = ()=>{
    return {
        type:ActionTypes.CLEAR_SEARCH_HISTORY
    }
}

