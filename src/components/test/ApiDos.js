import React, { useState}  from 'react';

export default function AsyncHooks(){
  const [search, setSearch] = useState('')

  function onSubmit(e) {
    e.preventDefault();
    console.log(search)
  }

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