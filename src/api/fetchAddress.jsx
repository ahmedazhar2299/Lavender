
import { Address_Set,No_Address } from "../redux/reducers/fetchAddress"


const fetchAddress = (completeAddress,dispatch)=>{
    try {
        dispatch(Address_Set(completeAddress))
    } catch (err) {
        dispatch(No_Address())
    }
}
export default fetchAddress