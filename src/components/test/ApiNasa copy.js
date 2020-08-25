import React, { useState, useEffect } from 'react';

export default function AsyncHooks() {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://images-api.nasa.gov/search?q=${query}`);
        const json = await response.json();
        console.log({ json })
      } catch (error) { }
    }
    if (query !== '') {
      fetchData();
    }
  }, [query]);

  return (
    <div>
      <h1>NASA</h1>
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

