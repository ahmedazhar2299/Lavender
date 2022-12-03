import axios from 'axios'
import { Computed_Total,Zero_Total } from '../redux/reducers/fetchTotal'
const fetchTotal = async (dispatch)=>{
    try {
        const res = await axios.get(`/cart`)
        dispatch(Computed_Total(res.data))
    } catch (err) {
        dispatch(Zero_Total())
    }
}
export default fetchTotal