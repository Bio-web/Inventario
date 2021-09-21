
import Footer from './components/Footer/Footer';
import Principal from './components/Principal/Principal';

import { useState } from "react";
import { Route } from "react-router-dom";

function Layout(props) {
    return(
        <>

            <main className = "contenedor">
                <Route {...props}/>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout;