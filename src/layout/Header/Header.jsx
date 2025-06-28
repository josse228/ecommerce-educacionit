import './Header.css'
import mainIcon from '../../assets/images/icons/icono-principal.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faLocationDot, faCartShopping, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Header(){

    return <header className="header-main">

        <div className="nav-container main-container">
            <label htmlFor="burguer-check" className="nav-burguer"><i><FontAwesomeIcon icon={faBars} /></i></label>
            <input type="checkbox" className="burguer-check" id="burguer-check" />
            <div className="top-nav">
                <div className="top-nav-left">
                    <NavLink to="/" className={({ isActive }) => `main-icon ${isActive ? 'active' : ''}`} ><img className="main-icon"  src={mainIcon}  alt="" /></NavLink>
                    <form className="input-form" action="">
                        <input className="input-search" type="text" placeholder="¿Qué deseas encontrar?" />
                        <button className="input-search-button"><i><FontAwesomeIcon icon={faMagnifyingGlass} /></i></button>
                    </form>
                </div>
                <div className="top-nav-right">
                    <NavLink to="/contact" className={({ isActive }) => `location-button ${isActive} ? 'active' : ''`}>Tienda Física<i className="location-icon"><FontAwesomeIcon icon={faLocationDot}/></i></NavLink>
                    <button className="shopping-cart-icon"><i><FontAwesomeIcon icon={faCartShopping}/></i></button>
                </div>
            </div>
            <div className="bottom-nav">
                <div className="bottom-nav-left">
                    <ul className="nav-list-left">
                        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''} ` }>Principal</NavLink>
                        <NavLink to="/products" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}` }>Productos</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}` }>Contacto</NavLink>
                        <NavLink to="/aboutUs" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}` }>Acerca de</NavLink>
                        <NavLink to="/adminproducts" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}` }>Admin Productos</NavLink>
                        <NavLink to="/adminuser" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}` }>Admin User</NavLink>
                    </ul>
                </div>
                <div className="bottom-nav-right">
                    <ul className="nav-list-right">
                        <NavLink to="/user" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}` }><i><FontAwesomeIcon icon={faUser}/></i> Usuario</NavLink>
                        <NavLink to="/login" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}` }>Iniciar Sesión</NavLink>
                        <NavLink to="/register" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}` }>Regístrate</NavLink>
                    </ul>
                </div>
                
            </div>
        </div>

    </header>
}

export default Header;