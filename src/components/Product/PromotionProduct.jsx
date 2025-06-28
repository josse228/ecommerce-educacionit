import { Link } from "react-router-dom";

export default function PromotionProduct({ productPromotion }){
        return (
                <Link to={`/product/${productPromotion.id}`} >
                        <article className="article-deal">
                                <img src={productPromotion.image} alt="" />
                                <p>{productPromotion.product}</p>
                                <p>Comprar</p>
                        </article>
                </Link>
        )  
}