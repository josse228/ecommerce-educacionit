import './Footer.css'
import mainIcon from '../../assets/images/icons/icono-principal-footer.png'
import { Link } from 'react-router-dom';

function Footer(){
    return <footer className="footer-container">
                <div className="footer-content main-container">
                    <div><img className="main-icon"  src={mainIcon}  alt="" /></div>
                    <div className="footer-enterprise footer-element">
                        <p><strong>La Empresa</strong></p>
                        <p><Link to="/aboutus">Sobre Nosotros</Link></p>
                        <p><a href="">Política de Privacidad</a></p>
                        <p><a href="">Términos y Condiciones</a></p>
                    </div>
                    <div className="footer-contact footer-element">
                        <p><strong>Contactanos</strong></p>
                        <p>Tel.: +54 556889065</p>
                        <p>Lunes a Viernes</p>
                        <p>Horario: 10h - 20h</p>
                        <div className="footer-social-media">
                            <a href=""><i className="fa-brands fa-instagram"></i></a>
                            <a href=""><i className="fa-brands fa-youtube"></i></a>
                            <a href=""><i className="fa-brands fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
        </footer>
}

export default Footer;