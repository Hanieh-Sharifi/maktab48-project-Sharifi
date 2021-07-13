import { SET_EDIT_ROW, PRODUCTS_LIST, DELETE_ROW, EDIT_PRODUCT, ADD_PRODUCT} from "../types/actionTypes";

const initialState = { tableList: [], editedRow:{}};

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
        default:
            return state;
        }
}

export default productsReducer;