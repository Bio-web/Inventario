import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Proveedores.css";

function Proveedores() {

    const[proveedores, setproveedores] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/json/proveedores.json")
        .then( (response) => response.json())
        .then( (data) => setproveedores(data))
    },[])

    return( 
        <div className = "contenedor-proveedores">
            <h1 className = "proveedor-titulo">
                <i class="fas fa-industry"></i> Proveedores
            </h1>
            {proveedores.map((proveedor) => {
                return(
                    <Container className = "proveedor">
                        <Row>
                            <Col className = "logo-proveedor" xs = {12}>
                                <Link to = {'proveedor/'+proveedor.id}>
                                <img
                                    src = {proveedor.logo}
                                    alt = {proveedor.Nombre}
                                />
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                );
            })}
        </div>
    )
}

export default Proveedores;