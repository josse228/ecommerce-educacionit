import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from'@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";

export default function Product({ product }){

        const { cart, 
                addItems, 
                removeFromCart } = useContext(CartContext);

                
        const existsInCart = cart.find( item => item._id === product._id)

    return  (
            
            <article className="card-product">
                <img src={`${import.meta.env.VITE_FILE_API}/products/${product.image}`} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="card-description">{product.description}</p>
                <p>{product.price}</p>
                <Link to={`/product/${product._id}`}><p className="btn">Comprar</p></Link>
                <button><i><FontAwesomeIcon icon={faHeart} /></i></button>
                { cart.length > 0 && existsInCart
                    ?  <span className="button-cart">
                            <button onClick={ () => addItems(product)}>+</button>
                            <button onClick={ () => removeFromCart(product._id)}>-</button>
                        </span> 
                    : <button onClick={ () => addItems(product)}><i><FontAwesomeIcon icon={faCartShopping} /></i></button>  
                }
            </article>

    )
}