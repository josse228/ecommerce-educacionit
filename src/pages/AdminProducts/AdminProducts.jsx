import './AdminProducts.css'
import { createProduct, updateProduct, getProducts, deleteProduct } from '../../services/productService';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import ProductAdmin from '../../components/ProductAdmin/ProductAdmin';
import { useEffect, useState } from 'react';

function AdminProducts( props ){

    const { product, 
            setProduct, 
            setProductPromotion, 
            setProductHighlight } = props

    const [ editProduct, setEditProduct ] = useState(null)

    const { register, handleSubmit, setValue, reset } = useForm();

    const fetchData = async() => {
        const response = await getProducts()
        const data = response.products;
        setProductHighlight(data);
        setProductPromotion(data);
        setProduct(data);
        console.log("Estoy ejecutandome")
    }

    useEffect(()=>{
        // Vuelvo a traer productos porque si usaba las categorias, se me filtraban en el AdminProduct :)
        fetchData()
        console.log("llamando a fetchdata")
    }, [])

    const handleDelete = (productId) => {
        
        Swal.fire({
            title:'¿Deseas borrar el producto?',
            text:'Confirma que quieres eliminar el producto',
            icon: 'warning',
            showConfirmButton: true,
            confirmButtonText: 'Eliminar'
        }).then( async(result) => {
            if(result.isConfirmed){
                try{
                    await deleteProduct(productId)

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

        const productUpdated = product.find( product => product._id == id);


        setValue("name", productUpdated.name);
        setValue("price", productUpdated.price);
        setValue("description", productUpdated.description);
        setValue("image", productUpdated.image);
        setValue("created", productUpdated.created);
        setValue("category", productUpdated.category);
        setValue("highlight", productUpdated.highlight);
        setValue("promotion", productUpdated.promotion);

        console.log(productUpdated)
        setEditProduct(productUpdated);
    }

    const onSubmit = async(dataProduct) => {
        // dataProduct.id = crypto.randomUUID();

        if(editProduct){
            await updateProduct(editProduct._id, dataProduct)
            .then( ()=>{
                Swal.fire({
                    title: 'Producto editado',
                    text:'Se ha editado el producto correctamente',
                    icon: 'success'
                })
            })

            fetchData();
            setEditProduct(null)
        }else{
            try{
                await createProduct(dataProduct)
                .then( () => {
                    console.log(dataProduct)
                    Swal.fire({
                        title: 'Producto agregado',
                        text: 'El producto se ha subido correctamente',
                        icon: 'success'
                    })
                })
                fetchData();
            }catch(err){
                console.log(err)
                Swal.fire({
                    title:'¡Error!',
                    text:'Hubo un error al cargar el producto',
                    icon: 'error'
                })
            }
        }

    reset();
    }

    return <main className="main-container">

                <div className='main-form main-container'>
                    <h2>Agrega o edita tu producto</h2>
                    <form className="form" onSubmit={handleSubmit(onSubmit)} method="post" >
                        <div className="input-group">
                            <label htmlFor="name">Producto</label>
                            <input  type="text" 
                                    id="name" 
                                    autoFocus 
                                    {...register("name", {
                                        required:"El nombre del producto es requerido"
                                    })} 
                            />  
                        </div>
                        <div className="input-group">
                            <label htmlFor="price">Precio</label>
                            <input  type="number" 
                                    id="price" 
                                    autoFocus 
                                    {...register("price", {
                                        required:"El precio es requerido"
                                    })} 
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="description">Descripcion</label>
                            <textarea   id="description" 
                                        rows="4" cols="60" 
                                        {...register("description", {
                                            required:"La descripcion es obligatoria"
                                        })} 
                            ></textarea>
                        </div>
                        <div className="input-group">
                            <label htmlFor="image">Introduzca la URL de la imagen</label>
                            <input  type="file"
                                    accept='image/*'
                                    id="image" 
                                    autoFocus 
                                    {...register("image", {
                                        required:"Coloque la URL de la imagen"
                                    })}  
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="created">Fecha de ingreso</label>
                            <input  type="date" 
                                    id="created" 
                                    {...register("created", {
                                        required:"Ingrese una fecha"
                                    })}  
                            />
                        </div>
                        <div className="input-group">
                                    <label htmlFor="category">Categoria</label>
                                    <select id="category" 
                                            {...register("category", {
                                                required:"Selecciona una categoria"
                                            })}
                                    >
                                        <option value="" disabled>Selecciona una categoria</option>
                                        <option value="celphone">Celulares</option>
                                        <option value="tv">TV</option>
                                        <option value="audio">Sonido</option>
                                        <option value="gaming">Gaming</option>
                                        <option value="computer">Computadoras y tablets</option>
                                        <option value="comfort">Somier y Colchones</option>
                                    </select><br />
                        </div>
                        <div className="input-group">
                            <label htmlFor="highlight">Destacado</label>
                            <input  type="checkbox" 
                                    id="highlight" 
                                    value={true}
                                    {...register("highlight")}  />
                        </div>
                        <div className="input-group">
                            <label htmlFor="promotion">Oferta</label>
                            <input  type="checkbox" 
                                    id="promotion"
                                    value={true}
                                    {...register("promotion")}  />
                        </div>
                        <div className="input-group">
                            <button type="submit">
                                { editProduct ? "Editar Producto" : "Agregar Producto"}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="table-wrapper">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Producto</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Fecha de Ingreso</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.map( product => (
                                <ProductAdmin   key={product._id}
                                                product={product} 
                                                handleEdit={handleEdit}
                                                handleDelete={handleDelete}
                                                />
                            ))}
                        </tbody>
                    </table>
                </div>
    </main>
}

export default AdminProducts;