import { combineReducers } from 'redux'
import  fetchDataReducer  from './fetchDataReducer'
import editUserReducer from './editUserReducer'
import addUserDataReducer from './addUserReducer'

const rootReducer=combineReducers({
    fetchDataReducer,
    editUserReducer,
    addUserDataReducer
    })

export default rootReducer;