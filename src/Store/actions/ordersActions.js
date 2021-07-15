import { SET_ORDERS_LIST, SET_SELECTED_ROW, UPDATE_SELECTED_ROW } from "../types/ordersActionsTypes";

export const ordersList = (data) => {
    return { type: SET_ORDERS_LIST, payload: data}
}

export const selectedRow = (data) => {
    return { type: SET_SELECTED_ROW, payload: data}
}

export const unSelectRow = () => {
    return { type: SET_SELECTED_ROW, payload: {} }
}

export const updateRowStatus = (data) => {
    return {type: UPDATE_SELECTED_ROW, payload:{...data, status:"done"}}
}