import React from 'react';
import Cartitem from './cartItem'
export default function Cartlist({ value }) {
    const { cart } = value;
    console.log(value, cart)
    return (<div className="container-fluid">
        {cart.map(item=>{
            return   <Cartitem key={item.id} item={item} value={value}/>
        })}
        
      
    </div>)
}