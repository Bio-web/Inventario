import "./Existencias.css";
import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'

function Existencias() {

    const [ existencias, setExistencias ] = useState([]);

    useEffect( () => {
        fetch("http://localhost:3000/json/existencias.json")
        .then( (response) => response.json())
        .then( (data) => setExistencias(data))        
    }, [])

    return(
        <div className = 'contenedor-existencias'>
            <h1>
                <i className="fas fa-warehouse"></i> Existencias
            </h1>
            <div className = 'tabla'>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Marca</th>
                    <th>Referencia</th>
                    <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {existencias.map(existencia => { 
                        return (
                                <tr>
                                <td><a href={'existencias/'+existencia.id}>{existencia.id}</a></td>
                                <td><a href={'existencias/'+existencia.id}>{existencia.nombre}</a></td>
                                <td><a href={'existencias/'+existencia.id}>{existencia.marca}</a></td>
                                <td><a href={'existencias/'+existencia.id}>{existencia.referencia}</a></td>
                                <td><a href={'existencias/'+existencia.id}>{existencia.cantidad}</a></td>
                                </tr>
                        );
                    })}
                </tbody>
                </Table>
            </div>
        </div>
        
    )
}

export default Existencias;