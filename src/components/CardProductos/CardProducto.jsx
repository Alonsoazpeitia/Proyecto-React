import * as React from 'react';
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material';
import "./CardProductos.css";
import { Icon } from '@iconify/react';

const CardProductos = ({data}) => {
    return (
        <Card sx={{ maxWidth: 345 }} className="CardProducto">
        <CardMedia
            component="img"
            alt="data.title"
            height="70%"
            image={data.image}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            ${data.price}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
            {data.description}
            </Typography> */}
            <Typography variant="body2" color="text.secondary">
            {data.title}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small"><Icon className='favorito' icon="uit:favorite" /></Button>
            <Button size="small">Agregar a la bolsa</Button>
        </CardActions>
        </Card>
    );
}
export default CardProductos;
// {"id":1,
// "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price":109.95,
// "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category":"men's clothing",
// "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// "rating":{"rate":3.9,"count":120}