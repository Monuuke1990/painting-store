import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./component/navbar";
import Details from "./component/details";
import Cart from "./component/cart/cart";
import Product from "./component/product";
import Productlist from "./component/ProductList";
import Modal from "./component/modal";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Productlist} />
            <Route path="/cart" component={Cart} />
            <Route path="/details" component={Details} />
          </Switch>
<Modal/>
        </div>
      </div>
    </div>

  );
}

export default App;
