import axios from 'axios'
import {LOGOUT,LOGIN_FAILURE } from '../redux/reducers/fetchUser'
const logoutSesion = async (dispatch)=>{
    try {
        const res = await axios.post('/user/logout')
        dispatch(LOGOUT())
    } catch (err) {
        dispatch(LOGIN_FAILURE())
    }
}
export default logoutSesion