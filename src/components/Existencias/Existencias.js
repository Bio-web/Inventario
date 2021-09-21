import "./Existencias.css";
import { useState, useEffect } from 'react'

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
            <i class="fas fa-warehouse"></i> Existencias</h1>
            <div className = 'grid'></div>
        </section>
        
    )
}

export default Existencias;