import React from 'react'
import Product from './Product'

export default function ProductList(props) {
    return (
        props.productList.length > 0 ?
        props.productList.map((product, i)=>{
            return <Product product={product} key={i} plusQuantity={props.plusQuantity} minusQuantity={props.minusQuantity} index={i} remove={props.remove} />
        })
        :
        <h1>No Products Exists in the Cart</h1>
    )
}
