import {types} from '../user_Types';

const initialstate={
    loading:false,
    user:[],
    error:{},
}

const addUserDataReducer=(state=initialstate,action)=>{
    switch(action.type){  
        case types.ADD_USER_REQUEST:
            return{
                ...state,
                loading:true
            } 
        case types.ADD_USER_SUCCESS:
            return{
                ...state,
                user:action.payload,
                error:{}
            }
        case types.ADD_USER_FAILURE:
            return{
                ...state,
                user:[],
                error:action.error
            }
        default :
            return state;
    }
}

export default addUserDataReducer;