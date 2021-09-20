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
                        <Navbar.Brand href="#home">Inicio</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="#home">Existencias</Nav.Link>
                        <Nav.Link href="#features">Proveedores</Nav.Link>
                        </Nav>
                    </Container>
                    <ul id="botones-cabecera">
                        <li>
                        {!user.isLoggedIn ? (
                        <Link to="/login" className="boton-login">
                            <i className="fas fa-user"></i>
                        </Link>
                        ) : (
                        <button className="boton-logout" onClick={() => cerrarSesion()}>
                            <i className="fas fa-sign-out-alt"></i>
                        </button>
                        )}
                        </li>
                    </ul>
                </Navbar>
                
            </div>         
        </header>     
        </>
        

       
    )
}

export default Header;