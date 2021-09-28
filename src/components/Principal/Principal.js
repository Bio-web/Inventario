import "./Principal.css";
import Carousel from 'react-bootstrap/Carousel';

function Principal() {
    return (
        <div className = "contenedor-carousel">
            <Carousel>
                <Carousel.Item>
                    <img
                    className = "d-block-center"
                    src = "http://localhost:3000/img/principal1.jpg"
                    alt = "First slide"
                    />
                    <Carousel.Caption>
                        <h1 className = "carousel-caption-1">Tecnología médica</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className = "d-block-center"
                    src = "http://localhost:3000/img/principal2.jpg"
                    alt = "Second slide"
                    />
                    <Carousel.Caption>
                        <h1 className = "carousel-caption-2">Sistemas actualizados</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className = "d-block-center"
                    src = "http://localhost:3000/img/principal3.jpg"
                    alt = "Third slide"
                    /> 
                    <Carousel.Caption>
                        <h1 className = "carousel-caption-3"> Los mejores proveedores</h1>
                    </Carousel.Caption>
                    
                </Carousel.Item>
            </Carousel>
        </div>
    )

}

export default Principal;