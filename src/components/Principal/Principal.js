import "./Principal.css";
import Carousel from 'react-bootstrap/Carousel';

function Principal() {
    return (
        <div className="text-center">
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block-center"
                src="https://construyenpais.com/wp-content/uploads/2019/06/Avances-tecnol%C3%B3gicos-al-servicio-de-pacientes-card%C3%ADacos.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3> Tecnología médica</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block-center"
                src="https://www.unisabana.edu.co/fileadmin/Archivos_de_usuario/Imagenes/Imagenes_subsitios_especiales/proyecto_salvar_vidas/ventilador-herons-noticias-unisabana.jpg"
                alt="Second slide"
                />
                
                <Carousel.Caption id="img2">
                <h2>Sistemas actualizados</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block-center"
                src="https://www.consalud.es/saludigital/uploads/s1/39/34/95/hospitales-digitales-el-nuevo-reto-del-futuro.jpeg"
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            </div>
    )

}

export default Principal;