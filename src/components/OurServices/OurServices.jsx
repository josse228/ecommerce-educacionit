import "./OurServices.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faHeadset, faTruck } from '@fortawesome/free-solid-svg-icons';

export default function OurServices(){
    return <section className="services-container main-container">
                <div className="card-service">
                    <div><i><FontAwesomeIcon icon={faTruck} /></i></div>
                    <p>Envios a Domicilio</p>
                    <p>¡Te llevamos tu compra a tu casa!</p>
                </div>
                <div className="card-service">
                    <div><i><FontAwesomeIcon icon={faCreditCard} /></i></div>
                    <p>Hasta 18 cuotas sin interes</p>
                    <p>¡Busca tu mejor forma de pago!</p>
                </div>
                <div className="card-service">
                    <div><i><FontAwesomeIcon icon={faHeadset} /></i></div>
                    <p>Servicio de Atencion</p>
                    <p>¡Te atendemos todas tus consultas!</p>
                </div>
        </section>
}