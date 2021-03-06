import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from './components/Login/Login';
import Principal from './components/Principal/Principal'; 
import Existencias from './components/Existencias/Existencias';
import Existencia from './components/Existencia/Existencia';
import Proveedores from './components/Proveedores/Proveedores';
import Proveedor from './components/Proveedor/Proveedor'
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
import Layout from './Layout';


function App() {
  const userStorage = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(
    userStorage ? userStorage : { isLoggedIn: false }
  );
  return (
    <Router>

      <UserContext.Provider value={{ user, setUser }}>
          {!userStorage ? (
          <Layout exact path = "">
            <Login></Login>
          </Layout>
          ) : 
          (
            <>
            <Switch>
              <Layout exact path = {["/inicio", "", "/"]}>
                <Principal></Principal>
              </Layout>
              <Layout exact path = "/existencias">
                <Existencias></Existencias>                
              </Layout>
              <Layout path = "/existencias/:id">
                <Existencia></Existencia>
              </Layout>
              <Layout exact path = "/proveedores">
                <Proveedores></Proveedores>
              </Layout>
              <Layout exact path = "/proveedor/:id">
                <Proveedor></Proveedor>
              </Layout>
            </Switch>

            </>
          )}
          
      </UserContext.Provider>
    </Router>
  );
}

export default App;
