import "./Proveedor.css";
import { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Proveedor() {

    const { id } = useParams();

    const [ proveedor, setProveedor ] = useState();
    useEffect( () => {
        fetch(`http://localhost:3000/json/${id}_proveedor.json`)
        .then( (response) => response.json())
        .then( (data) => setProveedor(data))
    }, [id])

    if (!proveedor) return null;

    return (
        <div className="contenedor-proveedor">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={proveedor.logo}/>
                <Card.Body>
                    <Card.Title>{proveedor.Nombre}</Card.Title>
                    <Card.Text>
                        <ul className = "info-proveedor">
                            <li>Telefono: {proveedor.Telefono}</li>
                            <li>Ciudad: {proveedor.Ciudad}</li>
                            <li>Dirección: {proveedor.Direccion}</li>
                            <li>Email: {proveedor.Email}</li>
                        </ul>
                    </Card.Text>
                    <Button href="/../proveedores">Atras</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Proveedor;