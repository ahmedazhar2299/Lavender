import axios from 'axios'
import {LOGIN_SUCCESS,LOGIN_FAILURE } from '../redux/reducers/fetchUser'
const checkUserSession = async (dispatch)=>{
    try {
        const res = await axios.get('/user/')
        dispatch(LOGIN_SUCCESS(res.data))
    } catch (err) {
        dispatch(LOGIN_FAILURE())
    }
}
export default checkUserSession