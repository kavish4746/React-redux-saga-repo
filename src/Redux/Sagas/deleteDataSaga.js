import { call, put, takeEvery } from 'redux-saga/effects'
import {types} from '../user_Types'
import axios from 'axios'
import { deleteUser } from '../Actions/user_delete_Actions'
import { fetchDataSuccess } from '../Actions/user_Actions'

function* asyncDeleteFunction(action){
    try {
        let url=`http://localhost:3004/users/${action.payload}`;
        const response=yield call(()=>axios.delete(url));    
        //After Deleting the user  we have to update the state
        //means we have to call success method from action using put
        let url1="http://localhost:3004/users/";
        const responseNew=yield call(()=>axios.get(url1));    
        yield put(fetchDataSuccess(responseNew.data));
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export function* watchDeleteUserSaga(){
    yield takeEvery(types.SEND_REQUEST_DELETE_SUCCESS,asyncDeleteFunction)
}