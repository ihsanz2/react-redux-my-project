import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducers'
import logger from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(logger))

export default store