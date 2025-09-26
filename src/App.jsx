import Header from "./layout/Header/Header";
import './App.css'
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products"
import AdminUser from "./pages/AdminUser/AdminUser"
import Contact from "./pages/Contact/Contact"
import AdminProducts from "./pages/AdminProducts/AdminProducts"
import User from "./pages/User/User"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import AboutUs from "./pages/AboutUs/AboutUs"
import Footer from "./layout/Footer/Footer";
import Checkout from "./pages/Checkout/Checkout";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "./services/productService";
import ProductDetail from "./components/Product/ProductDetail";
import { AuthProvider } from './context/AuthContext';
import AdminGuard from "./guard/AdminGuard";


function App(){
    const [ product, setProduct ] = useState([]);
    const [ productPromotion, setProductPromotion ] = useState([]); // Creo un state nuevo para no pisar en cada fetch de mi handleCategory
    const [ productHighlight , setProductHighlight ] = useState([]); // Creo un state nuevo para no pisar en cada fetch de mi handleCategory

    const fetchData = async() => {
        console.log("estoy ejecutandome")
        // Guardo una copia en cada state para todas mis secciones
        const response = await getProducts();
        const data = response.products

        setProduct(data);
        setProductPromotion(data);
        setProductHighlight(data);
        return data
    }

    const handleCategory = async (category) => {
     const data = await fetchData(); // Traigo todos los productos de nuevo

        console.log("Estoy ejecutandome")

        if (category === 'all') {
            setProduct(data); // Muestro todos si me viene la categoria "all"
        } else {
            const filtered = data.filter(products => products.category === category);
            setProduct(filtered);  // De lo contrario, muestro solo los productos filtrados.
        }
    };

    useEffect(() => {
        fetchData();
        console.log("Estoy ejecutandome")
    },[])


    return (

        <AuthProvider>
                <Header />

                    <Routes>

                        <Route  
                            path="/" 
                            element={
                                <Home 
                                    productHighlight = {productHighlight}
                                    productPromotion={productPromotion}
                                    product={product}
                                    handleCategory={handleCategory}/>} 
                            />
                        <Route 
                            path="/products" 
                            element={
                                <Products 
                                    product={product}/>}
                            />
                        <Route path="/aboutus" element={<AboutUs />}/>
                        <Route path="/contact" element={<Contact />}/>
                        <Route  
                            path="/adminproducts" 
                            element={
                                <AdminGuard>
                                    <AdminProducts 
                                        product={product} 
                                        setProduct={setProduct}
                                        productPromotion={productPromotion}
                                        setProductPromotion={setProductPromotion}
                                        productHighlight={productHighlight}
                                        setProductHighlight={setProductHighlight}
                                        />
                                </AdminGuard>
                                }
                        />
                        <Route 
                            path="/product/:id" 
                            element={
                            <ProductDetail />}/>
                        <Route 
                            path="/adminuser" 
                            element={
                                <AdminGuard>
                                    <AdminUser />
                                </AdminGuard>
                                }
                        />
                        <Route path="/user" element={<User />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/register" element={<Register />}/>
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="*" element={<h2>Not Found</h2>}/>
                    
                    </Routes>

                <Footer />
        </AuthProvider>
        
    )
}

//Tenia un fragment <> qur envolvia todos mis componentes

export default App;