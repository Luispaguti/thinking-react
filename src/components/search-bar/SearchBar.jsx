import React from 'react'

function SearchBar({search, filterInStock, setSearch}) {
  return (
    <div>
      Search
      <div className="mb-2">

        <input
         value={search}
          type="text"
          className="form-control"
          onChange={(ev) => {
            setSearch(ev.target.value)
          }}/>
      </div>
      <div className='form-check'>
        <input
           checked={filterInStock}
          className='form-check-input'
          type="checkbox"
          id='flexCheckDefault'
        />
        <label className='form-check-label' htmlFor="flexCheckDefault">
          Show products in stock
        </label>

      </div>
    </div>

  )
}

export default SearchBar