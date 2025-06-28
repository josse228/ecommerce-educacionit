import './CategorySection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faGamepad, faHeadphones, faLaptop, faMobileScreen, faTv } from '@fortawesome/free-solid-svg-icons';

export default function CategorySection({ handleCategory }){
    return   <section className="main-container category-section">
                <div className="category-title">
                    <h1 onClick={() => handleCategory("all")}>Todos nuestros productos</h1>
                </div>
                <div className="categories-products">
                    <div className="category">
                        <button onClick={() => handleCategory("tv")}><i><FontAwesomeIcon icon={faTv} /></i></button>
                        <p>Smart TV</p>
                    </div>
                    <div className="category">
                        <button onClick={() => handleCategory("celphone")}> <i><FontAwesomeIcon icon={faMobileScreen} /></i></button>
                        <p>Celulares</p>
                    </div>
                    <div className="category">
                        <button onClick={() => handleCategory("audio")}><i><FontAwesomeIcon icon={faHeadphones} /></i></button>
                        <p>Sonido y Parlantes</p>
                    </div>
                    <div className="category">
                        <button onClick={() => handleCategory("computer")}><i><FontAwesomeIcon icon={faLaptop} /></i></button>
                        <p>Notebook y Tablets</p>
                    </div>
                    <div className="category">
                        <button onClick={() => handleCategory("gaming")}><i><FontAwesomeIcon icon={faGamepad} /></i></button>
                        <p>Gaming</p>
                    </div>
                    <div className="category">
                        <button onClick={() => handleCategory("comfort")}><i><FontAwesomeIcon icon={faBed} /></i></button>
                        <p>Colchones y Sommiers</p>
                    </div>     
                </div>
        </section>
}