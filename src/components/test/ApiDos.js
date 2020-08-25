import React, { useState, useEffect } from 'react';

export default function AsyncHooks() {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=gvYWMneH5JY1E3kCJsXsWn9VkoCtRcMQ&q=${query}&limit=10&offset=0&rating=r&lang=en
    `);
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

