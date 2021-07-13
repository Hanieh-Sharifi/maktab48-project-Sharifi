import { combineReducers } from 'redux';
import TodoReducer from './productsReducer';

const RootReducer = combineReducers({
    products: TodoReducer,
})

export default RootReducer;