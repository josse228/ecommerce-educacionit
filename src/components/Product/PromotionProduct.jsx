import { Link } from "react-router-dom";

export default function PromotionProduct({ productPromotion }){
        return (
                
                        <article className="article-deal">
                                <img src={`${import.meta.env.VITE_FILE_API}/products/${productPromotion.image}`} alt={productPromotion.name} />
                                <p>{productPromotion.name}</p>
                                <Link to={`/product/${productPromotion._id}`}><p>Comprar</p></Link>
                        </article>
        )  
}