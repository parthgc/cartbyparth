import React from 'react'

export default function Product(props) {
    return (
        <div className="row m-3 d-flex justify-content-center p-2 bg-light rounded">
            <div className="col-5">
                <h2>{props.product.name} <span class="badge bg-secondary">₹{props.product.price}</span></h2>
            </div>
            <div className="col-5">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-danger" onClick={() => {props.minusQuantity(props.index)}}> - </button>
                    <button type="button" className="btn btn-outline-secondary">{props.product.quantity}</button>
                    <button type="button" className="btn btn-outline-success" onClick={() => {props.plusQuantity(props.index)}}> + </button>
                </div>
                <span className="badge bg-dark m-1">{props.product.quantity*props.product.price}</span>
            </div>
            <div className="col-auto">
                <button className="btn btn-danger" onClick={() => {props.remove(props.index)}} >Remove</button>
            </div>
        </div>
    )
}
