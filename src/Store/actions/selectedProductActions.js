import { EDIT_ROW } from "../types/actionTypes";

export const selectedProduct = (data) => {
    return { type: EDIT_ROW, payload: data }
}

export const deleteSelectedProduct = () => {
    return { type: EDIT_ROW, payload: {} };
}