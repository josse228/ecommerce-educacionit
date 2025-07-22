import axios from 'axios'

// const BASE_URL = 'https://685f200fc55df675589da167.mockapi.io/'

const BASE_URL = import.meta.env.VITE_SERVER_API

export const getUsers = async() =>{

    try{
        const usersData = await axios.get(`${BASE_URL}/users`);
        return usersData.data
    }catch(err){
        console.log(err)
        throw err;
    }
}

export const createUser = async( dataUser ) => {
    try{
        const token = localStorage.getItem('token');

        await axios.post(`${BASE_URL}/users`, dataUser, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then( () => console.log('Usuario agregado correctamente'))
    }catch(err){
        console.log(err)
    }
}

export const updateUser = async( id, dataUser ) => {
    try{
        const token = localStorage.getItem('token');

        console.log(id)
        console.log(dataUser)

        await axios.put(`${BASE_URL}/users/${id}`, dataUser, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then( () => console.log("Usuario editado correctamente"))
    }catch(err){
        console.log(err)
    }
}

export const deleteUser = async (id) => {
    try{
        const token = localStorage.getItem('token')

        await axios.delete(`${BASE_URL}/users/${id}`,{
            headers: {
                Authorization:`Bearer ${token}`
            }
        })
    }catch(err){
        console.log(err)
    }
}
