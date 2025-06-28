import axios from "axios";

const BASE_URL = 'https://68558c271789e182b37b9ea3.mockapi.io/'

export const getProducts = async() =>{

    try{
        const productsData = await axios.get(`${BASE_URL}/products`);
        return productsData.data
    }catch(err){
        console.log(err)
        throw err;
    }
}

export const getProduct = async(id)=>{
    try{
        const productData = await axios.get(`${BASE_URL}/products/${id}`)
        return productData.data
    }catch(err){
        console.log(err)
    }
}

export const createProduct = async( dataProduct) => {
    try{
        await axios.post(`${BASE_URL}/products`, dataProduct)
        .then( () => console.log('Producto agregado correctamente'))
    }catch(err){
        console.log(err)
    }
}

export const updateProduct = async( id, dataProduct ) => {
    try{
        await axios.put(`${BASE_URL}/products/${id}`, dataProduct)
        .then( () => console.log("Producto editado correctamente"))
    }catch(err){
        console.log(err)
    }
}

export const deleteProduct = async (id) => {
    try{
        await axios.delete(`${BASE_URL}/products/${id}`)
    }catch(err){
        console.log(err)
    }
}
