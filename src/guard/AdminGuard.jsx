import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function AdminGuard({ children }){
    const { user } = useContext(AuthContext);

    return user?.rol === 'admin' ? children : <Navigate to="/" replace />


}