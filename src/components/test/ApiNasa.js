import React, { useState, useEffect } from 'react';

export default function AsyncHooks() {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://images-api.nasa.gov/search?q=${query}`);
        const json = await response.json();
        setResultados(
          json.collection.items.map(item => {
            return item;
          })
        )
        // console.log({ resultados })
      } catch (error) { }
    }
    if (query !== '') {
      fetchData();
    }
  }, [query, resultados]);

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
        <br />
        {resultados.map((postData, i) => (
          <div key="i">

            {console.log(postData)}
            <h5>{postData.data[0].nasa_id}</h5>
            <p>{postData.data[0].date_created}</p>
            {/* <p>{postData.links[0].href}</p> */}
            {/* <p>{postData.links[0].href}</p> */}
          </div>
        ))}

      </form>
    </div>
  )
}

