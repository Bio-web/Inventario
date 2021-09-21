import "./Header.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    const { user, setUser } = useContext(UserContext);

    const cerrarSesion = () => {
      setUser({ isLoggedIn: false });
      localStorage.removeItem("user");
    };
    return (
        <>
        <header id="cabecera"> 
            <div >
                <Navbar variant="dark">
                    <Container>
                        <Navbar.Brand href="inicio">Inicio</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="existencias">Existencias</Nav.Link>
                        <Nav.Link href="proveedores">Proveedores</Nav.Link>
                        </Nav>
                    </Container>
                    <ul id="botones-cabecera">
                        {!user.isLoggedIn ? (
                        <Link to="/login" >
                            <i className="none"></i>
                        </Link>
                        ) : (
                        <button className="boton-logout" onClick={() => cerrarSesion()}>
                            <i className="fas fa-sign-out-alt"></i>
                        </button>
                        )}
                    </ul>
                </Navbar>
                
            </div>         
        </header>     
        </>
        

       
    )
}

export default Header;