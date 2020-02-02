import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class details extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    (value) => {
                        const { id, company, img, info, price, title, iCart } = (value.detailsProduct)
                        return (<div className="container">
                            
                            <div className="detail-box">
                            <div className="row">
                                <div className="col-md-6"><div className="dtl-img-box"><img src={img} alt="product image" className="detail-img" ></img></div></div>
                                <div className="col-md-6">
                                <h2>{
                                    title}</h2>
                                <p>made by:{company}</p>
                                <h4 className="text-blue">
                                    <strong>${price}</strong>
                                </h4>
                                <p><strong>Some Info</strong><span> {info}</span></p>
                            <div>
                                <Link to="/">
                                    <button className="btn btn-primary">
                                        back to product
                                    </button>
                                </Link>
                                <Link to="/cart">
                                    <button className="btn btn-warning"   disabled={iCart?true:false}    onClick={() => { value.addToCart(id) }
                                        }>
                                        {iCart?"inCart":"add to cart"}
                                    </button>
                                </Link>
                            </div>
                            </div>


                                </div>
                                
                             
                            </div>
                        </div>)
                    }
                }
            </ProductConsumer>
        )
    }
}