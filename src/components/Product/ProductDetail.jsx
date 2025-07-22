import { useEffect, useState } from "react"
import { getProduct } from "../../services/productService"
import { useParams } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function ProductDetail(){

    const [ productDetail, setProductDetail ] = useState([]);

    const { id } = useParams()

    const { addItems } = useContext(CartContext);

    useEffect(()=>{
        const productData = async () => {
            const res = await getProduct(id);
            const data = res.product
            setProductDetail(data)
        }
        productData();
    }, [id])

    return <article className="main-container product-detail-container">
        <div className="product-image-detail">
            <div className="image-detail">
                <img src={`${import.meta.env.VITE_FILE_API}/products/${productDetail.image}`} alt={productDetail.name} />
            </div>
            <div className="text-detail">
                <h2>{productDetail.name}</h2>
                <p className="price-detail">${productDetail.price}</p>
                <p>{productDetail.description}</p>
                <button className="btn" onClick={() => addItems(productDetail)}>Agregar al carrito</button>
            </div>
        </div>
        <div className="product-description">
            <p>{productDetail.description}</p>
        </div>
    </article>
}