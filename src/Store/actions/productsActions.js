import { deleteData, postData, putData } from "../../API/productApi";
import { SET_EDIT_ROW, PRODUCTS_LIST, DELETE_ROW, EDIT_PRODUCT, ADD_PRODUCT} from "../types/productsActionTypes";

export const selectedRowForEdit = (data) => {
    return { type: SET_EDIT_ROW, payload: data }
}

export const unSelectRowForEdit = () => {
    return { type: SET_EDIT_ROW, payload: {} };
}

export const tableData = (data) => {
    return { type: PRODUCTS_LIST, payload: data };
}

export const deleteProduct = (index) => {
    return { type: DELETE_ROW, payload: index};
}

export const deleteItemApi = (index) => (dispatch) => {
    deleteData(index)
        .then(response => dispatch(deleteProduct(index)))
        .catch(error => console.error(error))
}

export const editProduct = (id, image, productName, category, explanation, price, inventory) => {
    return { type: EDIT_PRODUCT, payload: { id, image, productName, category, explanation, price, inventory}}
}

export const editProductApi = (id, image, productName, category, explanation, price, inventory) => (dispatch) => {
    putData(id, image, productName, category, explanation, price, inventory)
        .then(response => dispatch(editProduct(id, image, productName, category, explanation, price, inventory)))
        .catch(error => console.error(error))
}

export const addNewProduct = (id,image, productName, category, explanation) => {
    return { type: ADD_PRODUCT, payload: {id, image, productName, category, explanation}}
}

export const addProductApi = (image, productName, category, explanation) => (dispatch) => {
    postData(image, productName, category, explanation)
        .then(res => { console.log(res.data);dispatch(addNewProduct(res.data.id,image, productName, category, explanation))})
        .catch(error => console.error(error))
}