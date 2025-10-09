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

        //Data para MP
        const dataToMercadoPago = {
            items: [],
            email: email
        }

        cart.forEach( item => {
            const { name, quantity, price } = item;
            dataToMercadoPago.items.push({ title: name, quantity: quantity, price: price})
        })
        //Response de MP
        const response = await mercadoPagoService(dataToMercadoPago);

        console.log(response.data.id)

        const { id, email } = user

        let newOrder = {
            products: [],
            mercadoPagoPreferenceId: response.data.id,
            total: total,
            user: id,
            email: email,
            status: "pending"
        };

        cart.forEach( item => {
            const { _id, name, quantity, price } = item;
            newOrder.products.push({ productId: _id, name: name, quantity, price: price * quantity })
        }) 
        
        await axios.post(`${BASE_URL}/orders`, newOrder, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        // const dataToMercadoPago = cart.map(item => ({
        //     title: item.name,
        //     quantity: item.quantity,
        //     price: item.price,
        // }));

    return response // ← devolvés el preferenceId

    }catch(err){
        console.log(err);
    }
}
