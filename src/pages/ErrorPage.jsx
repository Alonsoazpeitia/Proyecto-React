import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        },3000)
    },[navigate]);
    return(
        <div className="">
            <h1>ErrorPage</h1>
            <p>Redireccionando a inicio...</p>
        </div>
    )
}

export default ErrorPage;