import './Checkout.css'
import { useContext, useEffect } from 'react';
import { CartContext } from "../../context/CartContext";
import { AuthContext } from '../../context/AuthContext';
import { createOrder } from '../../services/orderService';
import { useState } from 'react';


import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';


export default function Checkout() {
    const { cart, total } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const [preferenceId, setPreferenceId] = useState(null);

    const handlePago = async () => {
        const res = await createOrder(user, cart, total);
        console.log(res)
        const id = res.data.id
        if (id) setPreferenceId(id);
    };

    useEffect(() => {
        initMercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLICKEY, { locale: 'es-AR' });
    }, []);

    return (
        <div className="container">
        <h2>Resumen de Compra</h2>

        <div className="summary">
            {cart.map(product => (
            <div key={product._id}>
                <p><strong>Producto:</strong> {product.name}</p>
                <p><strong>Cantidad:</strong> {product.quantity}</p>
                <p><strong>Precio:</strong> {product.price}</p>
            </div>
            ))}
            <p>Total $ARS: {total}</p>
        </div>

        <div className="main-form main-container">
            <h2>Tu compra se enviará a tu correo electrónico</h2>
            <p><strong>{user.email}</strong></p>
            <button className="input-group" onClick={handlePago}>
            Ir a Pagar
            </button>
        </div>

        <div className="checkout-btn">
            {preferenceId && (
            <Wallet initialization={{ preferenceId }} />
            )}
        </div>
        </div>
    );
}
