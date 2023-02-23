import { combineReducers, configureStore, MiddlewareArray } from '@reduxjs/toolkit'
const rootReducer = combineReducers({})
export type RootState = ReturnType<typeof rootReducer>
import fetchAPI from '../reducer/fecthData'
export type AppDispatch = typeof store.dispatch
import thunkMiddleware from 'redux-thunk'

const middleware = new MiddlewareArray().concat(thunkMiddleware)
const reducer = combineReducers({fetchAPI})
const store = configureStore({reducer, middleware})

export default store