import React, { Component } from 'react';
import Product from './product';
import Title from './Title';
import { storeProducts } from '../data';
import { ProductConsumer } from '../context';


export default class productlist extends Component {
    state = {
        products: storeProducts,
    };
    render() {
        console.log(this.state.product)
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <Title name="Our" title="Product" />
                        <ProductConsumer>
                            {value => {
                               
                                    
                               return value.products.map(product =>{
                                   return <Product key={product.id} product={product}/>;
                               });
                                
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}