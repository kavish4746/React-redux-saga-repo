import { types} from '../user_Types'


export function fetchDataForUpdate(id){
    return{
        type:types.SEND_REQUEST_EDIT,
        payload:id
    }
}

export const fetchDataForUpdateSuccess=(users)=>{
    console.log(users)
    return{
        type:types.GET_USER_DATA_FOR_UPDATION,
        payload:users
    }
}

export const UpdateUserData=(users)=>{
    return{
        type:types.SEND_REQUEST_EDIT_SUCCESS,
        payload:users
    }
}

export const UpdateUserDataFailure=(error)=>{
    return{
        type:types.SEND_REQUEST_EDIT_FAILURE,
        error:error
    }
}
