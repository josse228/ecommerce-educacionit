import './AboutUs.css'
import avatar from '../../assets/images/fotoavatar.jpg'

function AboutUs(){
    return <main className="about-us-container main-container">
                <div className="about-us">
                        <h1>Acerca de Nosotros</h1>
                        <p>En <strong>ElectroNic-E</strong>, nos apasiona hacer tu vida más cómoda y eficiente. Desde nuestra fundación, hemos estado comprometidos en ofrecer una amplia gama de electrodomésticos de alta calidad que satisfacen las necesidades de cada hogar. Nos enorgullecemos de proporcionar productos innovadores que combinan tecnología de vanguardia con un diseño elegante, asegurando que cada compra mejore tu vida diaria. Con un servicio al cliente excepcional y un enfoque centrado en la satisfacción del cliente, <strong>ElectroNic-E</strong> se ha establecido como líder en el mercado de electrodomésticos.</p>

                        <h3>¿Quienes somos?</h3>
                        <p>Somos un equipo dedicado de profesionales que trabajan incansablemente para traer lo mejor en electrodomésticos a tu hogar. Desde refrigeradores y lavadoras hasta televisores y sistemas de audio, nuestra misión es ofrecer productos que hagan tu vida más sencilla y placentera. Con más de 25 años en el mercado, nuestra experiencia y conocimiento nos permiten seleccionar y ofrecer solo los mejores productos disponibles. Estamos comprometidos en brindar un servicio personalizado y una experiencia de compra excepcional para cada cliente.</p>

                        <h3>Nuestra Misión</h3>
                        <p>Nuestra misión en <strong>ElectroNic-E</strong> es mejorar la calidad de vida de nuestros clientes a través de productos innovadores, eficientes y duraderos. Nos esforzamos por ofrecer un catálogo diverso que satisfaga las necesidades y preferencias de todos, asegurando siempre la más alta calidad y tecnología. Nos comprometemos a brindar un servicio al cliente incomparable, ayudando a nuestros clientes a tomar decisiones informadas y asegurándonos de que cada compra sea una inversión valiosa para sus hogares. En <strong>ElectroNic-E</strong>, creemos que un hogar mejor comienza con los mejores electrodomésticos.</p>
                        <div className="avatar-section">
                            <img src={avatar} alt="" />
                            <h3>Jose Martinez</h3>
                            <p>Desarrollador del Proyecto</p>
                        </div>
                </div>
    </main>
}

export default AboutUs