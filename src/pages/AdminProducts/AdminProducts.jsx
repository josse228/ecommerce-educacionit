import './AdminProducts.css'
import { createProduct, updateProduct, getProducts, deleteProduct } from '../../services/productService';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import ProductAdmin from '../../components/ProductAdmin/ProductAdmin';
import { useEffect, useState } from 'react';

function AdminProducts({ product, setProduct }){

    const [ editProduct, setEditProduct ] = useState(null)

    const { register, handleSubmit, setValue, formState: {errors}, reset } = useForm();

    const fetchData = async() => {
        const data = await getProducts()
        setProduct(data);
    }

    useEffect(()=>{
        // Vuelvo a traer productos porque si usaba las categorias, se me filtraban en el AdminProduct :)
        fetchData()
    },)

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
        const productUpdated = product.find( product => product.id === id);

        setValue("product", productUpdated.product);
        setValue("price", productUpdated.price);
        setValue("description", productUpdated.description);
        setValue("image", productUpdated.image);
        setValue("created", productUpdated.created);
        setValue("category", productUpdated.category);
        setValue("highlight", productUpdated.highlight);
        setValue("promotion", productUpdated.promotion);

        setEditProduct(productUpdated);
    }

    const onSubmit = async(dataProduct) => {
        // dataProduct.id = crypto.randomUUID();

        if(editProduct){
            await updateProduct(editProduct.id, dataProduct)
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
                            <label htmlFor="product">Producto</label>
                            <input  type="text" 
                                    id="product" 
                                    autoFocus 
                                    {...register("product", {
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
                            <input  type="text" 
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
                                    {...register("highlight")}  />
                        </div>
                        <div className="input-group">
                            <label htmlFor="promotion">Oferta</label>
                            <input  type="checkbox" 
                                    id="promotion" 
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
                                <ProductAdmin   key={product.id}
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