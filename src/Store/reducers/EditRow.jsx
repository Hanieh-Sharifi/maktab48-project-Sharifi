import { EDIT_ROW} from "../types/actionTypes";

const initialState=[];

function TodoReducer(state = initialState, action)
{
    switch (action.type) {

    case EDIT_ROW:
        {
            return [action.payload];
        }

    default:
        return state;
    }
}

export default TodoReducer;