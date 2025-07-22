import PromotionProduct from '../Product/PromotionProduct'
import './Banner.css'

export default function Banner({productPromotion}){
    return  <section className="main-banner main-container">
                <div className="article-deals-banner">
                    <div className="article-deals-left">
                        <h2>
                            <span>TOP</span> OFERTAS
                        </h2>
                        <p>Mas vistos</p>
                        <p>Cantidades limitadas</p>
                        <button className="btn">Comprar Ahora</button>
                    </div>
                    <div className="article-deals-right">
                        {productPromotion.filter( prod => prod.promotion)
                            .map( prod => (
                            <PromotionProduct   key={prod._id} 
                                                productPromotion={prod}/>
                        ))}
                        {/* <article className="article-deal">
                            <img src="assets/images/products/macbook-air-apple-13.jpg" alt="" />
                            <p>MacBook Air Apple 13</p>
                            <a href="">Comprar</a>
                        </article>
                        <article className="article-deal">
                            <img src="assets/images/products/headset-sony.jpg" alt="" />
                            <p>Auriculares Sony Inalámbricos Bluetooth</p>
                            <a href="">Comprar</a>
                        </article>
                        <article className="article-deal">
                            <img src="assets/images/products/iphone-14-promax.jpg" alt="" />
                            <p>Iphone 14 Pro Max</p>
                            <a href="">Comprar</a>
                        </article>
                        <article className="article-deal">
                            <img src="assets/images/products/tv-samsung-50.jpg" alt="" />
                            <p>Televisor Samsum 50 Pulgadas</p>
                            <a href="">Comprar</a>
                        </article> */}
                    </div>
                </div>
        </section>
}