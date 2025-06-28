import axios from 'axios'

const BASE_URL = 'https://685f200fc55df675589da167.mockapi.io/'

export const getUsers = async() =>{

    try{
        const usersData = await axios.get(`${BASE_URL}/user`);
        return usersData.data
    }catch(err){
        console.log(err)
        throw err;
    }
}

// export const getUser = async(id)=>{
//     try{
//         const userData = await axios.get(`${BASE_URL}/users/${id}`)
//         return userData.data
//     }catch(err){
//         console.log(err)
//     }
// }

export const createUser = async( dataUser ) => {
    try{
        await axios.post(`${BASE_URL}/user`, dataUser)
        .then( () => console.log('Usuario agregado correctamente'))
    }catch(err){
        console.log(err)
    }
}

export const updateUser = async( id, dataUser ) => {
    try{
        await axios.put(`${BASE_URL}/user/${id}`, dataUser)
        .then( () => console.log("Usuario editado correctamente"))
    }catch(err){
        console.log(err)
    }
}

export const deleteUser = async (id) => {
    try{
        await axios.delete(`${BASE_URL}/user/${id}`)
    }catch(err){
        console.log(err)
    }
}
