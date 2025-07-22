import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }){

    const [ cart, setCart ] = useState([]);
    const [ total, setTotal ] = useState(0);
    const [ countItems, setCountItems ] = useState(0);
    const [ order, setOrder ] = useState([]);

    useEffect( ()=> {
        calculateTotal();
        calculateItems();
    }, [cart])


    function calculateTotal() {
        let total = 0;

        cart.forEach(( product ) => {
            total += product.price * product.quantity
        })
        setTotal(total)
    }

    function calculateItems() {
        let count = 0;

        cart.forEach(( product ) => {
            count += product.quantity
        })

        setCountItems(count)
    }


    function addItems(product) {

        const productExists = cart.find(item => item._id === product._id);

        let updatedCart;

        if (productExists) {
            updatedCart = cart.map(item =>
            item._id === product._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
        } else {
            updatedCart = [...cart, { ...product, quantity: 1 }];
        }

        setCart(updatedCart);
    }

    const removeFromCart = (id) => {

        let updated = cart.map( item => 
            item._id === id
            ? {...item, quantity: item.quantity - 1}
            : item
        )

        let filtered = updated.filter(item => item.quantity !== 0);

        setCart(filtered);
    };

    const clearCart = () => {
        setCart([]);
    };

    console.log("EL TOTAL DE TU COMPRA ES:",total, "EL TOTAL DE TUS PRODUCTOS SON:", countItems, cart)

    return (
        <CartContext.Provider 
            value={{ 
                cart, 
                total, 
                countItems, 
                addItems, 
                removeFromCart,
                clearCart}}>
            { children }
        </CartContext.Provider>
    )

}