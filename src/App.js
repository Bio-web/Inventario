import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Existencias from './components/Existencias/Existencias';
import Principal from './components/Principal/Principal';
import Proveedores from './components/Proveedores/Proveedores';



function App() {
  return (
    <Router>
      <Header></Header>
      <Principal></Principal>
      <Footer></Footer>
    </Router>
  );
}

export default App;
