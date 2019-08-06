import { combineReducers, createStore } from 'redux'
import tasks from './tasks'

const rootReducer = combineReducers({
    tasks,                                   //tasks: tasks,
})

export default createStore(rootReducer, {})