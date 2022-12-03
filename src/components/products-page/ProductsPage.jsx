import React from 'react'
import { useState } from 'react'
import ProductTable from '../product-table/ProductTable'
import SearchBar from '../search-bar/SearchBar'
import jsonData from './../../data.json'
import '../products-page/ProductsPage.css'

function ProductsPage() {
  const [search, setSearch] = useState('');
  const [filterInStock, setFilterInStock] = useState(false);
  return (
    <div >
      <h1 className='mb-4'>IronStore</h1>
      <SearchBar search={search}
       setSearch={setSearch} 
       filterInStock={filterInStock}
      setFilterInStock={setFilterInStock}/>
      <ProductTable search={search}  filterInStock={filterInStock} />
    </div>
  )
}

export default ProductsPage