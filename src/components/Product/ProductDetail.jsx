import { useEffect, useState } from "react"
import { getProduct } from "../../services/productService"
import { useParams } from "react-router-dom"

export default function ProductDetail(){

    const [ productDetail, setProductDetail ] = useState([]);

    const { id } = useParams()

    useEffect(()=>{
        const productData = async () => {
            const res = await getProduct(id);
            setProductDetail(res)
        }
        productData();
    }, [id])

    return <article className="main-container product-detail-container">
        <div className="product-image-detail">
            <div className="image-detail">
                <img src={productDetail.image} alt={productDetail.product} />
            </div>
            <div className="text-detail">
                <h2>{productDetail.product}</h2>
                <p className="price-detail">${productDetail.price}</p>
                <p>{productDetail.description}</p>
                <button className="btn">Agregar al carrito</button>
            </div>
        </div>
        <div className="product-description">
            <p>{productDetail.description}</p>
        </div>
    </article>
}