import axios from "axios";

export const putData = (id, image, productName, category, explanation) => {
    axios.put(`http://localhost:5000/products/${id}`, {
        image: image,
        productName: productName,
        category: category,
        explanation: explanation
    })
}

export const postData = (image, productName, category, explanation ) => {
    axios.post(`http://localhost:5000/products/`, {
        image: image,
        productName: productName,
        category: category,
        explanation: explanation
    })
}

export const deleteData = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`)
        .then(response => window.location.reload())
}

export const getData = () => {
    return axios.get("http://localhost:5000/products")
}