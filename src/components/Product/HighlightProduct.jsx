import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from'@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function HighlightProduct({ productH }){
    return (
        <Link to={`/product/${productH.id}`}>
                <article className="card-product">
                                <img src={productH.image} alt={productH.product} />
                                <h3>{productH.product}</h3>
                                <p>{productH.description}</p>
                                <p>{productH.price}</p>
                                <p className="btn">Comprar</p>
                                <button><i><FontAwesomeIcon icon={faHeart} /></i></button>
                                <button><i><FontAwesomeIcon icon={faCartShopping} /></i></button>
                </article>
        </Link>
    )  
}