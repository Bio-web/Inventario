import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Proveedores.css";

function Proveedores() {

    const[proovedores, setProovedores] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/json/proovedores.json")
        .then( (response) => response.json())
        .then( (data) => setProovedores(data))
    },[])

    return( 
        <div className = "contenedor-proovedores">
            <h1 className = "proovedor-titulo">
                <i class="fas fa-industry"></i> Proovedores
            </h1>
            {proovedores.map((proovedor) => {
                return(
                    <Container className = "proovedor">
                        <Row>
                            <Col className = "logo-proovedor" xs = {6}>
                                <img
                                    src = {proovedor.logo}
                                    alt = {proovedor.Nombre}
                                />
                            </Col>
                            <Col className = "info-proovedor" xs = {6}>
                                <h2>{proovedor.Nombre}</h2>
                                <ul>
                                    <li>Telefono: {proovedor.Telefono}</li>
                                    <li>Ciudad: {proovedor.Ciudad}</li>
                                    <li>Dirección: {proovedor.Direccion}</li>
                                    <li>Email: {proovedor.Email}</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                );
            })}
        </div>
    )
}

export default Proveedores;