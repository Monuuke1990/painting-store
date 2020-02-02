import React from 'react';
export default function CartItem({ item, value }) {
    const { id, img, price, title, total, count } = item;
    const { increament, decreament, removeItem } = value;
    return (<div>
        
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>product</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Item</th>
                    <th>Remove</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src={img} style={{ width: '5rem', height: "5rem" }} /></td>
                    <td>{title}</td>
                    <td>$: {price}</td>
                    <td> <div className="">
                        <span className="btn btn-success" onClick={() => decreament(id)}>-</span>
                        <span className="btn btn-success" >
                            {count}
                        </span>
                        <span className="btn btn-success" onClick={() => increament(id)}>+</span>
                    </div></td>
                    <td><div className="cart-icom" onClick={() => removeItem(id)}><i className="fas fa-trash"></i></div></td>
                    <td>{total}</td>
                </tr>

            </tbody>
        </table>




    </div>)
}