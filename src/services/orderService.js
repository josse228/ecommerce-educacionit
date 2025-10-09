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

        let token = localStorage.getItem('token');

        let { id, email } = user
        console.log(cart, user, total)

        //Data para MP

        let external_reference = Date.now();

        let dataToMercadoPago = {
            items: [],
            email: email,
            external_reference,
        }

        cart.forEach( item => {
            const { name, quantity, price } = item;
            dataToMercadoPago.items.push({ title: name, quantity: quantity, price: price})
        })
        //Response de MP
        let response = await mercadoPagoService(dataToMercadoPago);

        let preferenceIdOrder = response.data.id;

        let collector = preferenceIdOrder.split("-")[0]

        console.log("collector--->", collector)
        console.log(response.data.id)

        let newOrder = {
            products: [],
            mercadoPagoPreferenceId: response.data.id,
            collector_id: collector,
            total: total,
            user: id,
            email: email,
            status: "pending"
        };


        cart.forEach( item => {
            const { _id, name, quantity, price } = item;
            newOrder.products.push({ productId: _id, name: name, quantity, price: price * quantity })
        }) 

        console.log(newOrder)
        
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
