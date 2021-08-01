import { SET_EDIT_ROW, PRODUCTS_LIST, DELETE_ROW, EDIT_PRODUCT, ADD_PRODUCT, SHOPPING_LIST, CLEAR_SHOPPING_LIST, DELETE_FROM_SHOPPPING_LIST} from "../types/productsActionTypes";

const initialState = { tableList: [], editedRow:{}, shoppingList:[...JSON.parse(localStorage.getItem("shoppingList") || "[]")]};

function productsReducer(state = initialState, action)
{
    switch (action.type) {
        case PRODUCTS_LIST: {
                return {...state, tableList: [...action.payload]};
        }
        case SET_EDIT_ROW: {
            return {...state, editedRow: action.payload};
        }
        case DELETE_ROW: {
            return {...state, tableList: state.tableList.filter((item) => item.id !== action.payload)}
        }
        case EDIT_PRODUCT: {
            return {...state, tableList: [...state.tableList, action.payload]}
        }
        case ADD_PRODUCT: {
            return {...state, tableList: [...state.tableList, action.payload]}
        }
        case SHOPPING_LIST: {
            return {...state, shoppingList: [...state.shoppingList, action.payload]}
        }
        case CLEAR_SHOPPING_LIST: {
            return {...state, shoppingList: []}
        }
        case DELETE_FROM_SHOPPPING_LIST: {
            return {...state, shoppingList: state.shoppingList.filter((item) => item.id!==action.payload)}
        }
        default:
            return state;
        }
}

export default productsReducer;