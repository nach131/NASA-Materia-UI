import React, { useState } from "react";

import useGiphy from './ApiOriLlamada'

export default function AsyncHooks() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [results, loading] = useGiphy(query);
// console.log(results)
  return (
    <div>
      <h1>Async React Hooks</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          setQuery(search);
        }}
      >
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search for Gifs!"
        />
        <button type="submit">Search</button>
      </form>
      <br />
      {loading ? (
        <h1>GIVE ME GIFS</h1>
      ) : (
        results.map(item => <video autoPlay loop key={item} src={item} />)
      )}
    </div>
  );
}
