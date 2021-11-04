import React from "react";
import Carta from "./App/Paginas/Carta";
import Registro from "./App/Paginas/Registro";
import Home from "./App/Paginas/Home";
import InicioSesion from "./App//Paginas/InicioSesion";
import Carrito from "./App/Paginas/Carrito";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetalleProducto from "./App/Paginas/DetalleProducto";
import ScrollRestoration from 'react-scroll-restoration'
import PersonalizarBurger from "./App/Paginas/PersonalizarBurger";
import { Provider } from "react-redux";
import store from './App/Redux/tienda'


const App = () => {
 
  return (
    <Provider store={store}>
    <BrowserRouter >
      <ScrollRestoration/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Registro" exact component={Registro} />
        <Route path="/InicioSesion" exact component={InicioSesion} />
        <Route path="/PersonalizarBurger" exact component={PersonalizarBurger} />
        <Route path="/Carta" exact component={Carta} />
        <Route path="/DetalleProducto/:id" exact component={DetalleProducto} />
        <Route path="/Carrito" exact component={Carrito} />
     
      </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;