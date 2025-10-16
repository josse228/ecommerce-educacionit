import './Checkout.css'
import { useContext, useEffect } from 'react';
import { CartContext } from "../../context/CartContext";
import { AuthContext } from '../../context/AuthContext';
import { createOrder } from '../../services/orderService';
import { useState } from 'react';


import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';


export default function Checkout() {
    const { 
        cart, 
        addItems, 
        removeFromCart, 
        total } = useContext(CartContext);

    const { user } = useContext(AuthContext);
    const [preferenceId, setPreferenceId] = useState(null);

    const handlePago = async () => {
        const res = await createOrder(user, cart, total);
        console.log(res)
        const id = res.data.id
        console.log("PREFERENCEID", id)
        if (id) setPreferenceId(id);
    };

    useEffect(() => {
        initMercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLICKEY, { locale: 'es-AR' });
    }, []);

    return (
        <>
            <div className="container">
                <h2>Resumen de Compra</h2>
                <div className="cart-summary">
                    <table>
                        <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.map((item) => (
                            <tr key={item._id}>
                            <td className="product-info">
                                <img src={`${import.meta.env.VITE_FILE_API}/products/${item.image}`} alt={item.name} />
                                <span>{item.name}</span>
                            </td>
                            <td>${item.price}</td>                
                            <td>
                                <div className='button-cart'>
                                    <button onClick={ () => removeFromCart(item._id)}>-</button>
                                    {item.quantity}
                                    <button onClick={ () => addItems(item)}>+</button> 
                                </div>
                            </td>
                            <td>$ARS: {item.price * item.quantity}</td>
                            </tr>
                        ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="4" style={{ textAlign: 'right', fontWeight: 'bold' }}>Total de tu compra:</td>
                                <td style={{ fontWeight: 'bold' }}>
                                    ${total}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>

            <div className="main-form main-container">
                <h2>Tu compra se enviará a tu correo electrónico</h2>
                <p><strong>{user.email}</strong></p>
                <button className="btn input-group" onClick={handlePago}>
                Pagar con Mercado Pago
                </button>
            </div>

            <div className="main-container checkout-btn">
                <div className='checkout-btn-reduce'>
                    {preferenceId && (
                    <Wallet initialization={{ preferenceId }} />
                    )}
                </div>
            </div>
        </>
    );
}
