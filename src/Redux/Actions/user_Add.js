import {types} from '../user_Types'

export const userAddRequest=(data)=>{
    return{
        type:types.ADD_USER_REQUEST,
        payload:data,
    }
}

export const userAddSuccess=(user)=>{
    return{
        type:types.ADD_USER_SUCCESS,
        payload:user
    }
}

export const userAddFailure=(error)=>{
    return{
        type:types.ADD_USER_FAILURE,
        error:error,
    }
}
