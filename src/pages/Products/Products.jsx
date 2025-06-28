import Product from '../../components/Product/Product';

function Products({ product }){
    return  <section className="main-content main-container">
                <div className="cards-main-content">
                    {product.map( product => (
                        <Product    key={product.id} 
                                    product={product}/>
                    ))}
                </div>
    </section>
}

export default Products