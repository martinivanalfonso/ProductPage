import { combineReducers } from 'redux'

import primaryColorReducer from './primary-color/primary-color.reducer'


const rootReducer = combineReducers({
    primaryColor: primaryColorReducer
})

export default rootReducer
