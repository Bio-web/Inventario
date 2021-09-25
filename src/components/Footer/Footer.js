import "./Footer.css";
import Card from 'react-bootstrap/Card';


function Footer() {
    return (
        <body id="Body-footer">
            <Card.Footer>           
            <div id= "texto">
                <p>
                <i className="fas fa-copyright"></i>
                    Copyright 2021
                </p>
                <p1>
                <i class="fas fa-envelope"></i>
                    Email : bio-web@hotmail.com
                </p1>        

                <p2>
                <i class="fas fa-phone-square-alt"></i>
                Teléfono: 304 89 98
                </p2>
              </div>           
            <div id="elementos">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            </div>
            
        </Card.Footer>
        </body>
        
    )
}

export default Footer;