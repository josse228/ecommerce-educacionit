import axios from "axios";
import { mercadoPagoService } from "./mercadoPago";

const BASE_URL = import.meta.env.VITE_SERVER_API;


export const getOrders = async() => {

    try{

        const orders = await axios.get(`${BASE_URL}/orders`);
        return orders.data

    }catch(err){
        console.log(err);
    }
}


export const createOrder = async ( user, cart, total ) => {

    try{

        const token = localStorage.getItem('token');

        console.log(cart, user, total)

        const { id, email } = user

        let newOrder = {
            products: [],
            total: total,
            user: id,
            email: email,
            status: "pending"
        };

        cart.forEach( item => {
            const { _id, quantity, price } = item;
            newOrder.products.push({ productId: _id, quantity, price: price * quantity })
        }) 
        
        await axios.post(`${BASE_URL}/orders`, newOrder, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const dataToMercadoPago = cart.map(item => ({
            title: item.name,
            quantity: item.quantity,
            price: item.price,
        }));

    const response = await mercadoPagoService(dataToMercadoPago);

    console.log(response)

    return response // ← devolvés el preferenceId

    }catch(err){
        console.log(err);
    }
}
