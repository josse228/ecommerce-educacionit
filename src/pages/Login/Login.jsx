import axios from "axios";
import Swal from "sweetalert2";
import User from "../User/User";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const API_URL = import.meta.env.VITE_SERVER_API

function Login(){
    const { user, setUser } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    async function login(userLogData){
        
        try{

            const response = await axios.post(`${API_URL}/login`, userLogData);

            const userData = response.data;

            console.log(userData)

            localStorage.setItem("user", JSON.stringify(userData.user));
            localStorage.setItem('token', userData.token)
            setUser(userData.user);

        }catch(err){
            console.log(err);
            Swal.fire({
                title: "Error",
                test: "Error iniciando sesión",
                icon: 'error'
            })
        }
    }


    return (
        <>
            {user 
                ? <User />
                : <main className="main-container">
                    <div className="main-form">
                        <h2>Iniciar Sesión</h2>
                        <form className="form" onSubmit={handleSubmit(login)}>
                            <div className="input-group">
                                <label htmlFor="email">Correo electrónico:</label>
                                <input 
                                    type="text" 
                                    id="email" 
                                    {...register('email')}
                                    required 
                                    autoFocus 
                                    minLength="3" 
                                    maxLength="50" 
                                    />  
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Contraseña:</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    {...register('password')} 
                                    required 
                                    autoFocus 
                                    minLength="3" 
                                    maxLength="50" />
                            </div>
                            <button className="btn" type="submit">
                                Iniciar Sesión
                            </button>
                        </form>
                    </div>
                </main>
            }
        </>
    )
}

export default Login