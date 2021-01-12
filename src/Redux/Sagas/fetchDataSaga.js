import { call, put, takeEvery } from 'redux-saga/effects'
import {types} from '../user_Types'
import axios from 'axios'
import { fetchDataSuccess } from '../Actions/user_Actions'

function* asyncFetchRequestFunction(){
    try {
        let url="http://localhost:3004/users/";
        const response=yield call(()=>axios.get(url));    
        //After getting data we have to update the state
        //means we have to call success method from action using put
        yield put(fetchDataSuccess(response.data));
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export function* watchFetchDataSaga(){
    yield takeEvery(types.SEND_REQUEST,asyncFetchRequestFunction)
}


