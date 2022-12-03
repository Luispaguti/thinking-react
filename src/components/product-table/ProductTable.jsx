import React from 'react'
import ProductRow from '../product-row/ProductRow'
import data from '../../data.json'
import { useState } from 'react';

function ProductTable({ search, filterInStock }) {
  // const [ productsToShow, setProductsToShow ]= useState([]);
  // if (productsToShow.length === 0) {
  //   return <div>Loading...</div>
  // }
  return (
    <div>
      <table className='table'>
        <thead bgcolor="yellow">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data
          .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
          .filter(p => filterInStock ? p.inStock : p)
          .map((product) => (
            <ProductRow key={product.id} {...product} />
          ))}
          
        </tbody>
      </table>
    </div>

  )
}

export default ProductTable