import React from 'react';

export default function Title(props){

    return (
        <div className="container">
            <div className="row">
                <h1>{props.name} {props.title}</h1>
            </div>

        </div>
    )

}