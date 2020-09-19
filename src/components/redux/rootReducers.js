import { combineReducers } from 'redux'
import cakeReducers from './cake/cakeReducers'
import iceReducers from './ice/iceReducers'

const rootReducer = combineReducers({
    cake: cakeReducers,
    ice: iceReducers
})

export default rootReducer