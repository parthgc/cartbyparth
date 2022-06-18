import React from 'react'

export default function Footer(props) {
    return (
        <div className="container mb-3 fixed-bottom">
            <div className="row d-flex justify-content-center">
                <button className="btn btn-danger col-2 m-1 shadow-lg" onClick={() => {props.reset(props.index)}}>Reset</button>
                <div className="btn col-7 bg-dark btn-dark m-1 shadow-lg">
                Total: ₹{props.total}
                </div>
                <button className="btn btn-success col-2 m-1 shadow-lg">Pay Now</button>
            </div>
        </div>
    )
}
