import React, {useEffect, useState} from "react";
import axios from "axios";
import CardProductos from "../CardProductos/CardProducto";
import { Link } from "react-router-dom";
import "./ListaProductos.css"

const ListaProductos = () => {
    const [productos, setProducto] = useState([]);

    useEffect(() => {
        axios("https://fakestoreapi.com/products").then((res) =>
        setProducto(res.data)
        );
    },[]);

    return (
            <div className="AllProdusctos">
                <h1>ListaProductos</h1>
                {productos.map((product) => {
                    return (
                        <div key={product.id} className="cardP">
                        <Link to={`detailPage/${product.id}`}>
                            <CardProductos data={product}/>
                        </Link>
                            
                        </div>
                    );
                })}
            </div>
    );
}
export default ListaProductos;