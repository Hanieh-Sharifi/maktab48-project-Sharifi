import { combineReducers } from 'redux';
import TodoReducer from './productsReducer';
import ordersReducer from "./ordersReducer";

const RootReducer = combineReducers({
    products: TodoReducer,
    orders: ordersReducer
})

export default RootReducer;