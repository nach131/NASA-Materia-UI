import React, { useState, useEffect } from 'react';

function useGiphy(query){
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=gvYWMneH5JY1E3kCJsXsWn9VkoCtRcMQ&q=${query}&limit=10&offset=0&rating=r&lang=en
    `);
        const json = await response.json();
        setResultados(
          json.data.map(item => {
            return item.images.preview.mp4;
          })
        );
        // console.log({ json })
      } catch (error) { }
    }
    if (query !== '') {
      fetchData();
    }
  }, [query, resultados]);

  return resultados
}

export default function AsyncHooks() {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('');

  const resultados = useGiphy(query)


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
      <br />
      {/* {resultados.map(item => (<h3 key={item}>{item}</h3>))} */}

      {resultados.map(item => (<video autoPlay loop key={item} src={item}/>))}
    </div>
  )
}
