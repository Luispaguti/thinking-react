import React from 'react'
import { useState } from 'react'
import ProductTable from '../product-table/ProductTable'
import SearchBar from '../search-bar/SearchBar'
import jsonData from './../../data.json'

function ProductsPage() {
  const [search, setSearch] = useState('');
  const [filterInStock, setFilterInStock] = useState(false);
  return (
    <div >
      <h1 className='mb-4'>IronStore</h1>
      <SearchBar search={search} filterInStock={filterInStock}/>
      <ProductTable/>
    </div>
  )
}

export default ProductsPage