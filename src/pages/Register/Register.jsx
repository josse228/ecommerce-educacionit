import './Register.css'
import { createUser } from './../../services/userService';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


export default function Register(){


    const { register, handleSubmit, reset, watch, formState: {errors} } = useForm();

    const password = watch("password");

    const userRegister = async(dataUser) => {
        console.log(dataUser)
        try{
                await createUser(dataUser)
                .then( () => {
                    Swal.fire({
                        title: 'Cuenta creada exitosamente',
                        text: 'Ya puedes iniciar sesión!',
                        icon: 'success'
                    })
                })
        }catch(err){
                console.log(err)
                Swal.fire({
                    title:'¡Error!',
                    text:'Hubo un error al crear el usuario',
                    icon: 'error'
                })
            }
        reset();
        }



    return  (
        <main className="main-form main-container">
                <h2>Registro de usuario</h2>
                <form className="form" onSubmit={handleSubmit(userRegister)} method="post">
                    <div className="input-group">
                        <label htmlFor="firstName">Nombre:</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            {...register("firstName", {
                                required: "El nombre es requerido"
                            })} 
                            autoFocus 
                            minLength="3" 
                            maxLength="50" 
                            />  
                    </div>
                    <div className="input-group">
                        <label htmlFor="lastName">Apellido:</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            {...register("lastName", {
                                required: "El apellido es necesario"
                            })}
                            autoFocus 
                            minLength="3" 
                            maxLength="50" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input  type="email" 
                                id="email" 
                                autoFocus 
                                {...register("email", {
                                    required:"El email es requerido"
                                })} 
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input 
                            type="password" 
                            id="password" 
                            {...register("password", { required: true })}
                            autoFocus 
                            minLength="3" 
                            maxLength="50" 
                            />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Repetir Contraseña:</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword"
                            {...register("confirmPassword", {
                                required: true,
                                validate: value => value === password || "Las contraseñas no coinciden"
                            })}
                            required
                            autoFocus 
                            minLength="3" 
                            maxLength="50" 
                            />
                        {errors.confirmPassword && <p style={{color: "red"}}>{errors.confirmPassword.message}</p> }
                    </div>
                    <div className="input-group">
                        <label htmlFor="fecha-nacimiento">Fecha de Nacimiento:</label>
                        <input 
                            type="date" 
                            id="fecha-nacimiento" 
                            {...register("birthDate", {
                                required: "Introduzca su fecha de nacimiento"
                            })}
                            required 
                            />
                    </div>
                    <div className="input-group">
                                <label htmlFor="national">Nacionalidad:</label>
                                <select 
                                    id="national" 
                                    {...register("national", {
                                        required: "Este campo es requerido"
                                    })} 
                                    required>
                                    <option value="" disabled>Selecciona tu pais</option>
                                    <option value="argentina">Argentina</option>
                                    <option value="brasil">Brasil</option>
                                    <option value="chile">Chile</option>
                                    <option value="uruguay">Uruguay</option>
                                    <option value="venezuela">Venezuela</option>
                                    <option value="other">Otro</option>
                                </select><br />
                    </div>
                    <div className="input-group">
                        <label htmlFor="comments">Comentarios</label>
                        <textarea 
                            id="comments" 
                            {...register("comments")}
                            rows="4" 
                            cols="50"
                            ></textarea>
                    </div>
                    <div className="input-group">
                        <button type="submit">
                            Registrarse
                        </button>
                    </div>
                </form>
    </main>
    )
}