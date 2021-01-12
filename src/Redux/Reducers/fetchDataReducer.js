import {types} from '../user_Types';

const initialstate={
    loading:false,
    user:[],
    error:'',
}

const fetchDataReducer=(state=initialstate,action)=>{
    switch(action.type){
        case types.SEND_REQUEST:
                return{
                    ...state,
                    loading:true
                }
        case types.SEND_REQUEST_SUCCESS:
            return{
                ...state,
                loading:false,
                user:action.payload,
            }
        case types.SEND_REQUEST_FAILURE:
            return{
                ...state,
                loading:false,
                user:{},
                error:action.error
            }

        case types.ADD_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                user:action.payload,
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

export default fetchDataReducer;