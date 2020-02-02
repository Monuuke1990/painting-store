import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo  from '../home.svg'

export default class navbar extends Component {
    
    render() {
        const mystyle = {
            height: "50px",
          };
        return (
            <nav className="navbar bg-primary nvbar-expand-sm navbar-dark">
                <Link to="/">
                    <img src={logo} alt="logo" className="navbar-brand" style={mystyle}/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Product</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <button className="btn btn-success">
                        <i className="fas fa-cart-plus">Cart</i>
                    </button>
                </Link>
            </nav>
        )
    }
}