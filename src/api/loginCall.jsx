import axios from 'axios'
import {LOGIN_FAILURE, LOGIN_SUCCESS } from '../redux/reducers/fetchUser'
const loginCall = async (userCredentials,dispatch)=>{
    try {
        const res = await axios.post('/auth/login',userCredentials)
        dispatch(LOGIN_SUCCESS(res.data))
        return true
    } catch (err) {
        dispatch(LOGIN_FAILURE())
        return false
    }
    return false
}
export default loginCall