import React, { useState, useEffect } from 'react';

export default function AsyncHooks() {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('');


  useEffect(() => {
    console.log({ query })
  },[query]);



  return (
    <div>
      <h1>AsyncHooks</h1>
      <form onSubmit={e => {
        e.preventDefault();
        setQuery(search);
      }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholde="Vuscar Gif"
          type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}