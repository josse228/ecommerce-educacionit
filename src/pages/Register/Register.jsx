import './Register.css'

export default function Register(){
    return  <main className="main-form main-container">
                <h2>Registro de usuario</h2>
                <form className="form" action="/submit" method="post" >
                    <div className="input-group">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required autoFocus minLength="3" maxLength="50" />  
                    </div>
                    <div className="input-group">
                        <label htmlFor="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido"required autoFocus minLength="3" maxLength="50" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="contrasena">Contraseña:</label>
                        <input type="password" id="contrasena" name="contrasena" required autoFocus minLength="3" maxLength="50" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="repetir-contrasena">Repetir Contraseña:</label>
                        <input type="password" id="repetir-contrasena" name="repetir-contrasena" required autoFocus minLength="3" maxLength="50" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="fecha-nacimiento">Fecha de Nacimiento:</label>
                        <input type="date" id="fecha-nacimiento" name="fecha-nacimiento" required />
                    </div>
                    <div className="input-group">
                                <label htmlFor="nacionalidad">Nacionalidad:</label>
                                <select id="nacionalidad" name="nacionalidad" required>
                                    <option value="argentina">Argentina</option>
                                    <option value="brasil">Brasil</option>
                                    <option value="chile">Chile</option>
                                    <option value="uruguay">Uruguay</option>
                                </select><br />
                    </div>
                    <div className="input-group">
                        <label htmlFor="comments">Comentarios</label>
                        <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
                    </div>
                    <div className="input-group">
                        <input type="submit" value="Registrarse" />
                    </div>
                </form>
    </main>
}