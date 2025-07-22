import './Home.css'
import Banner from './../../components/Banner/Banner';
import CategorySection from './../../components/CategorySection/CategorySection';
import OurServices from './../../components/OurServices/OurServices';
import Product from '../../components/Product/Product';
import HighlightProduct from '../../components/Product/HighlightProduct';


function Home({ product, handleCategory, productPromotion, productHighlight }){


    return <main>

        <Banner productPromotion={productPromotion} />

        <CategorySection handleCategory={handleCategory}/>

        <section className="main-content main-container">
            <div className="cards-main-content">
                {product.map( product => (
                    <Product    key={product._id} 
                                product={product}/>
                ))}
            </div>

            <div className="highlights-container">

                <div className="highlights-title">
                    <h3>Productos Destacados</h3>
                </div>
                <div className="cards-main-content">
                    {productHighlight.filter( product => product.highlight)
                            .map(prod => (
                                <HighlightProduct
                                    key={prod._id}
                                    productH={prod}/>
                            ))}
                </div>
        
            </div>
        </section>

        <OurServices />

    </main>
}

export default Home;