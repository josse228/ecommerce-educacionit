import axios from "axios";
import { useEffect, useState } from "react";

export default function ConfirmationPurchaseimport() {

    const BASE_URL = import.meta.env.VITE_SERVER_API;

    const [ orderBD, setOrderBD ] = useState(null)

    const queryParams = new URLSearchParams(window.location.search);
    const collectionId = queryParams.get("collection_id");
    const status = queryParams.get("collection_status"); // o "status"

    const getOrders = async() => {

        try{

            const response = await axios.get(`${BASE_URL}/confirmationPurchase?collection_id=${collectionId}&collection_status=${status}`);
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
