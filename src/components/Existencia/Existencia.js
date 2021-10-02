import "./Existencia.css";
import { useState, useEffect } from 'react'
import {useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Existencias() {

    const { id } = useParams();

    const [ existencia, setExistencia ] = useState();
    useEffect( () => {
        fetch(`http://localhost:3000/json/${id}.json`)
        .then( (response) => response.json())
        .then( (data) => setExistencia(data))

    }, [id])

    if (!existencia) return null;

    return(
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={existencia.foto}/>
                <Card.Body>
                    <Card.Title>{existencia.nombre}</Card.Title>
                    <Card.Text>
                        {existencia.descripcion}
                    </Card.Text>
                    <Button href="/../existencias">Atras</Button>
                </Card.Body>
            </Card>
        </div>
     )
}

export default Existencias;