import React, { useState, useEffect}  from 'react';

export default function AsyncHooks(){
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    setQuery(search);
    // console.log(search)
  }
useEffect(() => {
console.log({query})
});



return (
  <div>
    <h1>AsyncHooks</h1>
    <form onSubmit={onSubmit}>
      <input 
      value={search}
      onChange={e => setSearch(e.target.value)}
      placeholde="Vuscar Gif"
      type="text"/>
      <button type="submit">Search</button>
    </form>
  </div>
)
}