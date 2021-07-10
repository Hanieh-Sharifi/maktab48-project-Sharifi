import { combineReducers } from 'redux';
import TodoReducer from './EditRow';

const RootReducer = combineReducers({
    todo: TodoReducer,
})

export default RootReducer;