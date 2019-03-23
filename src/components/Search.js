import React from 'react';

const Search = ({ handleChange, handleSubmit }) => {
  return <form className="search" onSubmit={handleSubmit}>
    <input type="text" placeholder="Type to add a Todo..." onChange={handleChange}/>
    <button className="btn" type="submit">Add Todo</button>
  </form>
}

export default Search;