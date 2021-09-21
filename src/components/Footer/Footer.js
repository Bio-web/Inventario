import "./Footer.css";
import Card from 'react-bootstrap/Card';


function Footer() {
    return (
        <Card.Footer>
            <div id="elementos">
            <i className="fas fa-copyright"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            </div>
        </Card.Footer>
    )
}

export default Footer;