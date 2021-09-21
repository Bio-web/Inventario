import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from './components/Login/Login';
import Principal from './components/Principal/Principal'; 
import Existencias from './components/Existencias/Existencias';
import Proveedores from './components/Proveedores/Proveedores';
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
      <Switch>

      <UserContext.Provider value={{ user, setUser }}>
          {!userStorage ? (
            
            <Login></Login>
          ) : 
          (
            <>
              <Layout path = "/inicio">
                <Principal></Principal>
              </Layout>
              <Layout path = "/existencias">
                <Existencias></Existencias>
              </Layout>
              <Layout path = "/proveedores">
                <Proveedores></Proveedores>
              </Layout>
            </>
          )}
          
      </UserContext.Provider>
    </Switch>
    </Router>
  );
}

export default App;
