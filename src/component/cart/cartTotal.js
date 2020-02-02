import React from 'react';
import { Link } from "react-router-dom";
import Paypal from "./paypal"
export default function CartTotal({ value,history }) {
    const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
    return (<div className="row">
        <div className="col-md-12">
            <div className="cart-total">
        <Link to="/">
            <button className="btn btn-danger" onClick={() => clearCart()}>ClearCart</button>
        </Link>
        <div><h3>subtotal:{cartSubtotal}</h3>
            <h3>Tax:{cartTax}</h3>
            <h3>Cart total:{cartTotal}</h3>
            {/* <Paypal  total={cartTotal} clearCart={clearCart} history={history}/> */}
            </div></div>
            </div>
    </div>)
}