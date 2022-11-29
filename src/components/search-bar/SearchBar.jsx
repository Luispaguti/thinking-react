import React from 'react'

function SearchBar({search, filterInStock}) {
  return (
    <div>
      Search
      <div className="mb-2">

        <input
          type="text"
          className="form-control"
        />
      </div>
      <div className='form-check'>
        <input
          value={search}
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