import {types} from '../user_Types';

const initialstate={
    loading:false,
    user:{},
    error:'',
}

const editUserDataReducer=(state=initialstate,action)=>{
    console.log(action.type);
    switch(action.type){  
        case types.SEND_REQUEST_EDIT:
            return{
                ...state,
                loading:true
            } 
        case types.GET_USER_DATA_FOR_UPDATION:
            return{
                ...state,
                loading:false,
                user:action.payload,
            }
        case types.SEND_REQUEST_EDIT_SUCCESS:
            return{
                ...state,
                loading:false,
                user:action.payload,
            }
        case types.SEND_REQUEST_EDIT_FAILURE:
            return{
                ...state,
                user:{},
                error:action.error
            }
        default :
            return state;
    }
}

export default editUserDataReducer;