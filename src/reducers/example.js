import * as ActionTypes from '../constants';

const initialState = {
    users: [],
    usersById:[]
}

const User = (state=initialState,action) =>{
    switch (action.type) {
        case ActionTypes.SET_USER:
            return  {
                ...state,
                users:'test'
            }
        default:
            return state;
    }
}
export default User
