import axios from "axios";


// update an order status
export const putOrder = (data) => {
    return (axios.put(`http://localhost:5000/orders/${data.id}`, {
        customerName: data.customerName,
        customerAddress: data.customerAddress,
        telephone: data.telephone,
        arriveTime: data.arriveTime,
        orderTime: data.orderTime,
        orderList: data.orderList,
        totalPrice: data.totalPrice,
        status:"done"
    }))
}

// get orders list
export const getOrders = () => {
    return axios.get("http://localhost:5000/orders")
}