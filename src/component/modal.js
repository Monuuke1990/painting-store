import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class modal extends Component {
    render() {
        return (<ProductConsumer>
            {value => {


                const { modalOpen, closeModal } = value;
                const { img, title, price } = value.modalProduct;

                if (!modalOpen) {
                    return null;
                }
                else {
                    return (<div className="overlay">
                        <div className="popup">
                            <h5>Item Added</h5>
                            <img src={img} alt="product image" className="cart-img-top"></img>
                            <h3>{title}</h3>
                            <h2>Price: $ {price}</h2>
                            <Link to="/">
                                <button className="btn btn-primary" onClick={() => closeModal()}>Continue Shoping</button>

                            </Link>
                            <Link to="/cart">

                                <button className="btn btn-warning" onClick={() => closeModal()}>Go cart</button>
                            </Link>

                        </div>
                    </div>)
                }
            }}
        </ProductConsumer>
        )
    }
}