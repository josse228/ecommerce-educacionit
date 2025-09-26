import axios from 'axios';

const BASE_URL = import.meta.env.VITE_SERVER_API;

export const mercadoPagoService = async ( data ) => {

    try {
        console.log(data)
        const preferenceId = await axios.post(`${BASE_URL}/payments`, data)

        console.log(preferenceId);
        
        return preferenceId
    }catch (err){
        console.log(err)
    }


}