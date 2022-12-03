import axios from 'axios'
import { Found_Success, Found_Failed } from '../redux/reducers/fetchItem'
const fetchItem = async (id,dispatch)=>{
    try {
        const res = await axios.get(`/product/${id}`)
        dispatch(Found_Success(res.data))
    } catch (err) {
        dispatch(Found_Failed())
    }
}
export default fetchItem