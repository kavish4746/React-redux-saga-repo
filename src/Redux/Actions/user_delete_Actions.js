import { types} from '../user_Types'

export const deleteUser=(id)=>{
    return{
        type:types.SEND_REQUEST_DELETE_SUCCESS,
        payload:id
    }
}
