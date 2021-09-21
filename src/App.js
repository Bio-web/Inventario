import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from './components/Login/Login';
import Principal from './components/Principal/Principal'; 
import Existencias from './components/Existencias/Existencias';
import Proveedores from './components/Proveedores/Proveedores';
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
import Layout from './Layout';
import Header from "./components/Header/Header"

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
                <Header></Header>
                <Principal></Principal>
              </Layout>
              <Layout exact path = "/existencias">
                  <Header></Header>
                <Existencias></Existencias>
              </Layout>
              <Layout exact path = "/proveedores">
                <Header></Header>
                <Proveedores></Proveedores>
              </Layout>
              </Switch>

            </>
          )}
          
      </UserContext.Provider>
    </Router>
  );
}

export default App;
