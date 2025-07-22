import axios from "axios";

// const BASE_URL = 'https://68558c271789e182b37b9ea3.mockapi.io/'
const BASE_URL = import.meta.env.VITE_SERVER_API

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

        console.log(dataProduct)
        const formData = new FormData();

        //Validando si las propiedades no se marcaron y vienen como undefined, le marcamos false
        const highlightValue = dataProduct.highlight ?? false;
        const promotionValue = dataProduct.promotion ?? false;

        console.log("REVISION", highlightValue, promotionValue)

        formData.append('name', dataProduct.name)
        formData.append('price', dataProduct.price)
        formData.append('description', dataProduct.description)
        formData.append('created', dataProduct.created)
        formData.append('category', dataProduct.category)
        formData.append('highlight', highlightValue)
        formData.append('promotion', promotionValue)
        formData.append('image', dataProduct.image[0])

        await axios.post(`${BASE_URL}/products`, formData)
        .then( () => console.log('Producto agregado correctamente', Response.data))

    }catch(err){
        console.log(err)
    }
}

export const updateProduct = async( id, dataProduct ) => {
    try{
        const token = localStorage.getItem('token');


         //Validando si las propiedades no se marcaron y vienen como undefined, le marcamos false
        const highlightValue = dataProduct.highlight ?? false;
        const promotionValue = dataProduct.promotion ?? false;

        const formData = new FormData();
        formData.append('name', dataProduct.name)
        formData.append('price', dataProduct.price)
        formData.append('description', dataProduct.description)
        formData.append('created', dataProduct.created)
        formData.append('category', dataProduct.category)
        formData.append('highlight', highlightValue)
        formData.append('promotion', promotionValue)
        formData.append('image', dataProduct.image[0])


        await axios.put(`${BASE_URL}/products/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then( res => console.log(res.message))
    }catch(err){
        console.log(err)
    }
}

export const deleteProduct = async (id) => {
    try{
        const token = localStorage.getItem('token');

        await axios.delete(`${BASE_URL}/products/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }catch(err){
        console.log(err)
    }
}
