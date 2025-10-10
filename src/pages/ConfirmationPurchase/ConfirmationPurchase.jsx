import axios from "axios";
import { useEffect, useState } from "react";

export default function ConfirmationPurchase() {

    const BASE_URL = import.meta.env.VITE_SERVER_API;

    const [ orderBD, setOrderBD ] = useState(null)

    const queryParams = new URLSearchParams(window.location.search);
    const collection_id = queryParams.get("collection_id");
    const collection_status = queryParams.get("collection_status");
    const payment_id = queryParams.get("payment_id");
    const status = queryParams.get("status");
    const external_reference = queryParams.get("external_reference");
    const payment_type = queryParams.get("payment_type")
    const merchant_order_id = queryParams.get("merchant_order_id")
    const preference_id =queryParams.get("preference_id")
    const site_id = queryParams.get("site_id")
    const processing_mode = queryParams.get("processing_mode")
    const merchant_account_id = queryParams.get("merchant_account_id")


    console.log("ESTOY INVOCANDO la funcion ConfirmatonPurchase",             
            collection_id,
            collection_status,
            payment_id,
            status,
            external_reference,
            payment_type,
            merchant_order_id,
            preference_id,
            site_id,
            processing_mode,
            merchant_account_id)

    const getOrders = async() => {

        try{

            const response = await axios.get(`${BASE_URL}/confirmationPurchase?collection_id=${collection_id}&collection_status=${collection_status}&payment_id=${payment_id}&status=${status}&external_reference=${external_reference}&payment_type=${payment_type}&merchant_order_id=${merchant_order_id}&preference_id=${preference_id}&site_id=${site_id}&processing_mode=${processing_mode}&merchant_account_id=${merchant_account_id}`);
            setOrderBD(response.data.order)

        }catch(err){
            console.log(err);
        }
        }

        useEffect( () => {
            getOrders();
        }, [])

    return(
        <>
            <h2>Confirmación de Compra</h2>
            {orderBD ? (
                <div>
                <p>Gracias por tu compra, {orderBD.email}</p>
                <ul>
                    {orderBD.products.map((item, index) => (
                    <li key={index}>{item.name} - Cantidad: {item.quantity}</li>
                    ))}
                </ul>
                </div>
            ) : (
                <p>Cargando orden...</p>
            )}
        </>
    )
}
