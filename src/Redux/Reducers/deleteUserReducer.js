import {types} from '../user_Types';

const initialstate={
    loadingFlag:false,
    user:[],
    error:{},
}

const deleteUserReducer=(state=initialstate,action)=>{
    switch(action.type){
       case types.SEND_REQUEST_DELETE_SUCCESS:
            return{
                ...state,
                user:action.payload,
                error:{},
            }
        default :
            return state;
    }
}

export default deleteUserReducer;