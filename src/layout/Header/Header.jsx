import './Header.css'
import mainIcon from '../../assets/images/icons/icono-principal.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faLocationDot, faCartShopping, faUser, faBars, faTrashCan, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from "../../context/CartContext";




function Header(){

    const { user, setUser } = useContext(AuthContext);

        const { cart, 
                total, 
                addItems, 
                removeFromCart,
                clearCart } = useContext(CartContext)

    const [ isCartOpen, setIsCartOpen ] = useState(false);

    const toggleOpen = () => {
        setIsCartOpen( prev => !prev);
    }
    console.log(isCartOpen)
    
    useEffect(()=>{
        console.log(user, "Se ejecuto el useEffect")
    },[user])

    async function logout(){
        localStorage.removeItem('user');
        localStorage.removeItem('token')
        setUser(null)
    }

    return <header className="header-main">

        <div className="nav-container main-container">
            <label htmlFor="burguer-check" className="nav-burguer"><i><FontAwesomeIcon icon={faBars} /></i></label>
            <input type="checkbox" className="burguer-check" id="burguer-check" />
            <div className="top-nav">
                {/* Navegacion superior izquierda */}
                <div className="top-nav-left">
                    <NavLink to="/" className={({ isActive }) => `main-icon ${isActive ? 'active' : ''}`} ><img className="main-icon"  src={mainIcon}  alt="" /></NavLink>
                    <form className="input-form" action="">
                        <input className="input-search" type="text" placeholder="¿Qué deseas encontrar?" />
                        <button className="input-search-button"><i><FontAwesomeIcon icon={faMagnifyingGlass} /></i></button>
                    </form>
                </div>
                {/* Navegacion superior derecha */}
                <div className="top-nav-right">
                    <NavLink to="/contact" className={({ isActive }) => `location-button ${isActive} ? 'active' : ''`}>Tienda Física<i className="location-icon"><FontAwesomeIcon icon={faLocationDot}/></i></NavLink>
                    <button onClick={ () => toggleOpen() } className="shopping-cart-icon">
                        <i className='cartShop-container'><FontAwesomeIcon icon={faCartShopping}/>
                            <span className={`${total ? 'bubble' : ''}`}></span>
                        </i>
                    </button>

                    {/* Carrito de compras */}
                    <div className={`shoppingContainer ${isCartOpen ? 'open' : ''}`}>
                        {cart.map(product => (
                            <div className="shoppingCartList" key={product._id}>
                                <img src={`${import.meta.env.VITE_FILE_API}/products/${product.image}`} alt={product.name} />
                                <div className="shoppingCartDetail">
                                    <p>{product.name}</p>
                                    <p>${product.price}</p>
                                    <div>
                                        <p><strong>Cantidad:</strong> {product.quantity}</p>
                                        <div className="button-cart">
                                            <button onClick={ () => addItems(product)}>+</button>
                                            <button onClick={ () => removeFromCart(product._id)}>-</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        { isCartOpen && cart.length > 0
                            ? <div className='info-shopping-container'>
                                <div className='dflex'>
                                    <div className='info-shopping-cart'><strong>Total $ARS: </strong>{total}</div>
                                    <button onClick={ () => clearCart() } className='trash-shopping-cart'><FontAwesomeIcon icon={faTrashCan} /></button>
                                </div>
                                <NavLink to="/checkout" className='btn'>
                                    Ir a Pagar
                                </NavLink>
                            </div>
                            : ''}
                        { cart.length == 0 && <div className='empty-shopping-cart'>Tu carrito esta vacio <FontAwesomeIcon style={{color:"rgba(252, 139, 2)", fontSize:"2rem"}} icon={faExclamation} /></div>}
                    </div>
                </div>
            </div>
            {/* Navegacion inferior izquierda */}
            <div className="bottom-nav">
                <div className="bottom-nav-left">
                    <ul className="nav-list-left">
                        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''} ` }>Principal</NavLink>
                        <NavLink to="/products" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}` }>Productos</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}` }>Contacto</NavLink>
                        <NavLink to="/aboutUs" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}` }>Acerca de</NavLink>
                        {user?.rol === 'admin' && (
                            <NavLink to="/adminproducts" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}` }>Admin Productos</NavLink>
                        )}
                        {user?.rol === 'admin' && (
                            <NavLink to="/adminuser" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}` }>Admin User</NavLink>
                        )}
                    </ul>
                </div>
                {/* Navegacion inferior derecha */}
                <div className="bottom-nav-right">
                    <ul className="nav-list-right">
                        {user
                            ? <NavLink to="/user" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}` }><i><FontAwesomeIcon icon={faUser}/></i> Usuario</NavLink>
                            : null}
                        {user 
                            ? <li className='nav-item'><button onClick={()=> logout()}>Cerrar Sesión</button></li>
                            : <NavLink to="/login" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}` }>Iniciar Sesión</NavLink>}
                        <NavLink to="/register" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}` }>Regístrate</NavLink>
                    </ul>
                </div>
                
            </div>
        </div>

    </header>
}

export default Header;