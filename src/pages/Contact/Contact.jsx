import './Contact.css'

function Contact(){
    return    <main className="main-container contact-form-container">
                    <h2>
                        Contacto
                    </h2>
                    <div className="contact-form">
                        <form className="form" action="/submit" method="post">
                            <h3>¡Completa el formulario para contactarte!</h3>
                            <div className="input-group">
                                <label htmlFor="nombreCompleto">Nombre completo</label>
                                <input type="text" id="nombreCompleto" name="nombreCompleto" required autoFocus minLength="3" maxLength="50" />  
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Correo Electrónico:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="comments">Comentarios</label>
                                <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
                            </div>
                            <div className="input-group">
                                <input type="submit" value="Enviar" />
                            </div>
                        </form>
                        <div className="iframe-container">
                            <h3>Nuestra ubicación</h3>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976.4685964126407!2d-58.42604927424098!3d-34.59314588226899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0078cd9db5%3A0x9b18bf0c56ce4a6a!2sSoho%20Garden.%20Departamento%202%20ambiented!5e0!3m2!1ses-419!2sar!4v1739150431487!5m2!1ses-419!2sar" width="500" height="350" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="JJ"></iframe>
                        </div>
                    </div>
    </main>
}

export default Contact