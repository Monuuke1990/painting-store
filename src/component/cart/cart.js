import React, { Component } from 'react';
import Title from '../Title';
import Cartcolumn from './cartcolomn';
import Emptycart from './emptycart';
import Cartlist from './cartlist';
import CartTotal from './cartTotal';
import { ProductConsumer } from '../../context';

export default class cart extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {value => {
                        const { cart }= value;
                        if (cart.length > 0) {
                            return (<div>
                                <Title name="Your" title="Cart" />
                                <Cartcolumn />
                                <Cartlist value={value}/>
                                <CartTotal value={value} history={this.props.history}/>
                            </div>)
                        } else {
                           return <Emptycart />
                        }
                    }}
                </ProductConsumer>


            </div>
        )
    }
}