import axios from 'axios'
import * as ActionTypes from '../constants'

export const getCustomerDetailTestData = ()=>async (dispatch,getState) =>{
    try{
        const res = await axios.get('https://easy-mock.com/mock/5a27ab137f2b435f137d0921/v1/cusomter-detail')
        if (res.status === 200 && res.data.code ==0) {
            dispatch({type:ActionTypes.FETCH_CUSTOMER_DETAIL_TEST_DATA,payload:res.data.data})
        }
    } catch(ex) {
        console.log(ex)
    }
}

export const updateChartData = (seriesdata)=>({
	type:ActionTypes.UPDATECHARTDATA,
	seriesdata
} )