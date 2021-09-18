import "./Header.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {

    return (
        <>
        
        <header id="cabecera"> 
            <div >
                <Navbar variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Inicio</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="#home">Existencias</Nav.Link>
                        <Nav.Link href="#features">Proveedores</Nav.Link>
                        </Nav>
                    </Container>
                <button className="boton-logout">
                    <i className="fas fa-sign-out-alt"></i>
                </button>
                </Navbar>
                
            </div>
            
        </header>
        
            <br></br>
            

                
        </>

       
    )
}

export default Header;