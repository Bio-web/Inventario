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
        <section id = 'existencias'>
            <h1>
                <i className="fas fa-warehouse"></i> Existencias
            </h1>
            <div className = 'grid'>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Marca</th>
                    <th>Referencia</th>
                    </tr>
                </thead>
                <tbody>
                    {existencias.map(existencia => { 
                        return (
                                        <tr>
                                        <td>{existencia.id}</td>
                                        <td>{existencia.nombre}</td>
                                        <td>{existencia.marca}</td>
                                        <td>{existencia.referencia}</td>
                                        </tr>
                        );
                    })}
                </tbody>
                </Table>
            </div>
        </section>
        
    )
}

export default Existencias;