import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import User from '../../components/User/User';
import { useEffect, useState } from 'react';
import { createUser, updateUser, getUsers, deleteUser } from './../../services/userService';

export default function AdminUser(){
    const [ user, setUser ] = useState([])
    const [ editUser, setEditUser ] = useState(null)

    const { register, handleSubmit, setValue, formState: {errors}, reset } = useForm();

    const fetchData = async() => {
        const res = await getUsers();
        const data = res.users

        setUser(data);
    }

    useEffect(()=>{
        fetchData();
    },[])

    const handleDelete = (userId) => {
        
        Swal.fire({
            title:'¿Deseas borrar el usuario?',
            text:'Confirma que quieres eliminar el usuario',
            icon: 'warning',
            showConfirmButton: true,
            confirmButtonText: 'Eliminar'
        }).then( async(result) => {
            if(result.isConfirmed){
                try{
                    await deleteUser(userId)

                    Swal.fire({
                        title: 'Tarea Eliminada!',
                        text: 'La tarea fue eliminada correctamente',
                        icon: 'success'
                    })

                    fetchData();
                }catch(err){
                    console.log(err)
                }
            }
        })

    }

    const handleEdit = (id) => {
        const userUpdated = user.find( user => user._id === id);

        setValue("firstName", userUpdated.firstName);
        setValue("email", userUpdated.email);
        setValue("password", userUpdated.password);
        setValue("rol", userUpdated.rol);

        setEditUser(userUpdated);
    }

    const onSubmit = async(dataUser) => {


        if(editUser){
            await updateUser(editUser._id, dataUser)
            .then( ()=>{
                Swal.fire({
                    title: 'Usuario editado',
                    text:'Se ha editado el usuario correctamente',
                    icon: 'success'
                })
            })

            fetchData();
            setEditUser(null)
        }else{

            try{
                await createUser(dataUser)
                .then( () => {
                    Swal.fire({
                        title: 'Usuario agregado',
                        text: 'El usuario se ha subido correctamente',
                        icon: 'success'
                    })
                })
                fetchData();
            }catch(err){
                console.log(err)
                Swal.fire({
                    title:'¡Error!',
                    text:'Hubo un error al crear el usuario',
                    icon: 'error'
                })
            }
        }

    reset();
    }

    return <main className="main-container">
    
                    <div className='main-form main-container'>
                        <h2>Agrega o edita el usuario</h2>
                        <form className="form" onSubmit={handleSubmit(onSubmit)} >
                            <div className="input-group">
                                <label htmlFor="firstName">Usuario</label>
                                <input  type="text" 
                                        id="firstName" 
                                        autoFocus 
                                        {...register("firstName", {
                                            required:"El nombre del usuario es requerido"
                                        })} 
                                />  
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
                                <label htmlFor="password">Introduzca la contraseña del usuario</label>
                                <input  type="password" 
                                        id="password" 
                                        autoFocus 
                                        {...register("password", {
                                            required:"Aplique una contraseña"
                                        })}  
                                />
                            </div>
                            <div className="input-group">
                                        <label htmlFor="rol">Categoria</label>
                                        <select id="rol" 
                                                {...register("rol", {
                                                    required:"Selecciona una rol de usuario"
                                                })}
                                        >
                                            <option value="" disabled>Selecciona un rol de usuario</option>
                                            <option value="admin">Administrador</option>
                                            <option value="client">Cliente</option>
                                        </select><br />
                            </div>
                            <div className="input-group">
                                <button type="submit">
                                    { editUser ? "Editar Usuario" : "Crear Usuario"}
                                </button>
                            </div>
                        </form>
                    </div>
    
                    <div className="table-wrapper">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Usuario</th>
                                    <th>Email</th>
                                    <th>Rol de usuario</th>
                                    <th>Contraseña</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.map( user => (
                                    <User   key={user._id}
                                                    user={user} 
                                                    handleEdit={handleEdit}
                                                    handleDelete={handleDelete}
                                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
        </main>
}