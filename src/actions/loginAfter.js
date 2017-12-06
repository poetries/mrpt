import * as ActionTypes from '../constants/'
import {CALL_API} from '../middleware/api'

export const loginAfter = (loginInfo) => (dispatch, getState) => {
	dispatch({
		loginInfo,
		type: ActionTypes.LOGIN_SUCCESS
	})
}