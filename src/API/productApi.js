import axios from "axios";


// update a product
export const putData = (id, image, productName, category, explanation, price, inventory) => {
    return (axios.put(`http://localhost:5000/products/${id}`, {
        image: image,
        productName: productName,
        category: category,
        explanation: explanation,
        price: price,
        inventory: inventory
    }))
}

// make a new product
export const postData = (image, productName, category, explanation ) => {
    return (axios.post(`http://localhost:5000/products/`, {
        image: image,
        productName: productName,
        category: category,
        explanation: explanation,
        price:10000,
        inventory:10
    }))
}

// delete a product
export const deleteData = (id) => {
    return axios.delete(`http://localhost:5000/products/${id}`)
}

// get products list
export const getData = () => {
    return axios.get("http://localhost:5000/products")
}