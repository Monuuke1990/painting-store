import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

export default class product extends Component {
    render() {
        const { id, title, img, price, iCart } = this.props.product;
        return (
            <div className="flex-container">

                <div className="card animated  fadeInUp delay-1s">
                    <ProductConsumer>
                        {
                            (value) => (<div>
                                <div onClick={() => value.handleDetail(id)} className="img-box">
                                    <Link to="/details">
                                        <img src={img} alt="product image" className="cart-img-top"></img>
                                    </Link>

                                </div>
                                <div className="btn-box">
                                    <button className="btn-cart"
                                        disabled={iCart ? true : false} onClick={() => { value.addToCart(id); value.openModal(id) }
                                        }>

                                        {iCart ? (<p className="text-capitalize" disabled>
                                            in cart</p>) : (<i className="fas fa-cart-plus"></i>)}

                                    </button>
                                </div>
                            </div>)
                        }



                    </ProductConsumer>
                    <div className="card-footer ">
                        <p className="align-self-center">
                            {
                                title
                            }
                        </p>
                        <strong className="align-self-center">${price}</strong>
                    </div>

                </div>
            </div>
        )

    }
}
product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        iCart: PropTypes.bool,

    }).isRequired
}