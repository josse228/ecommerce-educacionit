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
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#f5f5f5"
        }}>
            <div style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                maxWidth: "500px",
                width: "100%",
                color: "black",
                textAlign: "center"
            }}>
                <h2 style={{ color: "rgb(37, 96, 235)", marginBottom: "1rem" }}>Confirmación de Compra</h2>
                {orderBD ? (
                <>
                    <p style={{ fontSize: "1.1rem" }}>Gracias por tu compra, <strong>{orderBD.email}</strong></p>
                    <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
                    {orderBD.products.map((item) => (
                        <li key={item.productId} style={{
                        padding: "0.5rem",
                        borderBottom: "1px solid #ddd"
                        }}>
                        {item.name} — Cantidad: {item.quantity}
                        </li>
                    ))}
                    </ul>
                    <button
                    style={{
                        marginTop: "2rem",
                        padding: "0.6rem 1.2rem",
                        backgroundColor: "rgb(252, 139, 2)",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}
                    onClick={() => window.location.href = "/"}
                    >
                    Volver al inicio
                    </button>
                </>
                ) : (
                <p>Cargando orden...</p>
                )}
            </div>
        </div>
    )
}
