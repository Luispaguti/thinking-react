import React from 'react'

function SearchBar() {
  return (
    <div>
      Search
      <div className="mb-2">
        <input
          // value={search}
          type="text"
          className="form-control"
          // onChange={(ev) => {
          //   setSearch(ev.target.value);
          // }}
        />
      </div>
      </div>
  )
}

export default SearchBar