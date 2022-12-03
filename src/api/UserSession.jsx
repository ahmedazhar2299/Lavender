import axios from 'axios'
import { Computed_Total, Zero_Total } from '../redux/reducers/fetchTotal'
import {LOGIN_SUCCESS,LOGIN_FAILURE } from '../redux/reducers/fetchUser'
const checkUserSession = async (dispatch)=>{
    try {
        const res = await axios.get('/user/')
        dispatch(LOGIN_SUCCESS(res.data))
        const cart = await axios.get('/cart')
        dispatch(Computed_Total(cart.data))
    } catch (err) {
        dispatch(LOGIN_FAILURE())
        dispatch(Zero_Total())
    }

}
export default checkUserSession