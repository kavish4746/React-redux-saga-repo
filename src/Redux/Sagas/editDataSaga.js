import { call, put, takeEvery } from 'redux-saga/effects'
import {types} from '../user_Types'
import axios from 'axios'
import { deleteUser } from '../Actions/user_delete_Actions'
import { fetchDataSuccess } from '../Actions/user_Actions'
import {fetchDataForUpdateSuccess, UpdateUserData} from '../Actions/user_Edit_Actions'

function* asyncGetUserDataForUpdateFunction(action)
{
    try {
        let url=`http://localhost:3004/users/${action.payload}`
         const response=yield call(()=>axios.get(url));
        console.log(response.data);
        yield put({type:types.GET_USER_DATA_FOR_UPDATION,payload:response.data});
        
    } catch (error) {
        yield put({type:types.SEND_REQUEST_EDIT_FAILURE,error:error});
    }
}

export function* watchGetUserDataForUpdate(){
    yield takeEvery(types.SEND_REQUEST_EDIT,asyncGetUserDataForUpdateFunction)
}

function* asyncEditFunction(action){
    try {
        console.log(action);
        let url=`http://localhost:3004/users/${action.payload.id}`;
        const response=yield call(()=>axios.put(url,action.payload));  

        let url1="http://localhost:3004/users/";
        const responseNew=yield call(()=>axios.get(url1));   
        yield put(fetchDataSuccess(responseNew.data));
    } catch (error) {
        yield put({type:types.SEND_REQUEST_EDIT_FAILURE,error:error});
    }
}


export function* watchEditUserSaga(){
    yield takeEvery(types.SEND_REQUEST_EDIT_SUCCESS,asyncEditFunction)
}