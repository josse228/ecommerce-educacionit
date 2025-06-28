import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from'@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Product({ product }){

    return  (
        <Link to={`/product/${product.id}`}>
            <article className="card-product">
                <img src={product.image} alt={product.product} />
                <h3>{product.product}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <p className="btn">Comprar</p>
                <button><i><FontAwesomeIcon icon={faHeart} /></i></button>
                <button><i><FontAwesomeIcon icon={faCartShopping} /></i></button>
            </article>
        </Link>

    )
}