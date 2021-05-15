import { combineReducers, createStore } from 'redux'
import pagination from './reducers/pagination'

const reducers = combineReducers({ pagination })

export const store = createStore(reducers)