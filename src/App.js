import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './components/Header/Header'
import Login from './components/Login/Login';
import Principal from './components/Principal/Principal'; 
import Existencias from './components/Existencias/Existencias';
import Proveedores from './components/Proveedores/Proveedores';
import Footer from './components/Footer/Footer'
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
function App() {
  const userStorage = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(
    userStorage ? userStorage : { isLoggedIn: false }
  );
  return (
    <Router>
     <UserContext.Provider value={{ user, setUser }}>
      <Switch>
      <Login></Login>
      <Footer></Footer>
      </Switch>
    </UserContext.Provider>
    </Router>
  );
}

export default App;
