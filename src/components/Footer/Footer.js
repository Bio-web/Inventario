import "./Footer.css";
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
    return (
        <Card.Footer>
        Footer
        <i className="fas fa-copyright"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
    </Card.Footer>

    )
}

export default Footer;