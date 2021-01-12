import { take,call,all,put,takeEvery } from 'redux-saga/effects'
import {watchFetchDataSaga} from './fetchDataSaga'
import {watchDeleteUserSaga} from './deleteDataSaga'
import {watchGetUserDataForUpdate} from './editDataSaga'
import {watchEditUserSaga} from './editDataSaga'

import {watchAdduserSaga} from './addDataSaga'
export default function* rootSaga(){
    yield all([
        watchFetchDataSaga(),
        watchDeleteUserSaga(),
        watchGetUserDataForUpdate(),
        watchEditUserSaga(),
        watchAdduserSaga(),
    ])
}