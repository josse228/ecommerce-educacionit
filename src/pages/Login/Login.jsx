

function Login(){
    return <main className="main-container">
                <div className="main-form">
                    <h2>Iniciar Sesión</h2>
                    <form className="form" action="/submit" method="post">
                        <div className="input-group">
                            <label htmlFor="user">Usuario:</label>
                            <input type="text" id="user" name="nombre" required autoFocus minLength="3" maxLength="50" />  
                        </div>
                        <div className="input-group">
                            <label htmlFor="contrasena">Contraseña:</label>
                            <input type="password" id="contrasena" name="contrasena" required autoFocus minLength="3" maxLength="50" />
                        </div>
                    <div className="input-group">
                            <input type="submit" value="Iniciar Sesión" />
                        </div>
                    </form>
                </div>
    </main>
}

export default Login