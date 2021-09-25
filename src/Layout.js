
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route } from "react-router-dom";

function Layout(props) {
    const userStorage = JSON.parse(localStorage.getItem("user"));

    return(
        <>
            {userStorage ? (
                <Header></Header>) : (null)}
            <main className = "contenedor">
                <Route {...props}/>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout;