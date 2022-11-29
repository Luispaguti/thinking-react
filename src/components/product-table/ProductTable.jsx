import React from 'react'
import ProductRow from '../product-row/ProductRow'
import data from '../../data.json'
import { useState } from 'react';

function ProductTable() {
  // const [ productsToShow, setProductsToShow ]= useState([]);
  // if (productsToShow.length === 0) {
  //   return <div>Loading...</div>
  return (
    <div>
      <table className='table'>
        <thead bgcolor="grey">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data
          .map((product) => (
            <ProductRow key={product.id} {...product} />
          ))}
          
        </tbody>
      </table>
    </div>

  )
}

export default ProductTable