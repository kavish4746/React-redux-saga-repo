import { call, put, takeEvery } from 'redux-saga/effects'
import {types} from '../user_Types'
import axios from 'axios'

function* asyncAddUserFunction(action){
    try {
        let url="http://localhost:3004/users/";
        const response=yield call(()=>axios.post(url,action.payload));
        console.log(response);
        //After getting data we have to update the state
        //means we have to call success method from action using put
        let url1="http://localhost:3004/users/";
        const response1=yield call(()=>axios.get(url1)); 

        yield put({type:types.ADD_USER_SUCCESS,payload:response1.data});
    } catch (error) {
        console.log("error");
    }
}

export function* watchAdduserSaga(){
    console.log("hello");
    yield takeEvery(types.ADD_USER_REQUEST,asyncAddUserFunction)
}