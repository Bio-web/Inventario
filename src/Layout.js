
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './Layout.css'
import { Route } from "react-router-dom";

function Layout(props) {
    const userStorage = JSON.parse(localStorage.getItem("user"));

    return(
        <div className = "contenedor-pagina">
            {userStorage ? (
                <Header></Header>) : (null)}
            <main className = "contenedor-principal">
                <Route {...props}/>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Layout;