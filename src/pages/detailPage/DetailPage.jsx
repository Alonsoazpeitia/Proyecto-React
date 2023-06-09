import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CardProductos from '../../components/CardProductos/CardProducto';

const DetailPage = () => {
    let {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`).then((res) =>
        setProduct(res.data)
        );
    },[id]);

  return (
    <div>
        {product && <CardProductos data={product}/>}
    </div>
  )
}

export default DetailPage