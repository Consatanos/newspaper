import React from 'react';

const Search = () => {
  return (
    <div className="search-form">
      <form action="#" method="post">
        <input type="search" name="search" className="form-control" placeholder="Search" />
        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
      </form>
    </div>
  )
};

export default Search;