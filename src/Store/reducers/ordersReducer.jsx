import { SET_ORDERS_LIST, SET_SELECTED_ROW, UPDATE_SELECTED_ROW} from "../types/ordersActionsTypes";

const initialState = { ordersList:[], editOrder:{} };

function ordersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ORDERS_LIST:{
            return {...state, ordersList: action.payload}
        }
        case SET_SELECTED_ROW:{
            return {...state, editOrder: action.payload}
        }
        case UPDATE_SELECTED_ROW:{
            return { ...state, ordersList: [...state.ordersList.filter(item => item.id!==action.payload.id), action.payload]}
        }
        default:
            return state;
    }
}

export default ordersReducer;