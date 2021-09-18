import "./Footer.css";
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
    return (
        <Card.Footer>
        Footer
        <i class="fas fa-copyright"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter"></i>
    </Card.Footer>

    )
}

export default Footer;