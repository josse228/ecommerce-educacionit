import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from'@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export default function HighlightProduct({ productH }){

    const { cart, 
            addItems, 
            removeFromCart } = useContext(CartContext);

    const existsInCart = cart.find( item => item._id === productH._id)

    return (
                <article className="card-product">
                                <img src={`${import.meta.env.VITE_FILE_API}/products/${productH.image}`} alt={productH.name} />
                                <h3>{productH.name}</h3>
                                <p className="card-description">{productH.description}</p>
                                <p>{productH.price}</p>
                                <Link to={`/product/${productH._id}`}><p className="btn">Comprar</p></Link>
                                <button><i><FontAwesomeIcon icon={faHeart} /></i></button>
                                { cart.length > 0 && existsInCart
                                    ?  <span className="button-cart">
                                            <button onClick={ () => addItems(productH)}>+</button>
                                            <button onClick={ () => removeFromCart(productH._id)}>-</button>
                                        </span> 
                                    : <button onClick={ () => addItems(productH)}><i><FontAwesomeIcon icon={faCartShopping} /></i></button>  
                                }             
                </article>
    )  
}