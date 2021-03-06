import React, { useState, useEffect } from 'react';

function useGiphy(query) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=gvYWMneH5JY1E3kCJsXsWn9VkoCtRcMQ&q=${query}&limit=10&offset=0&rating=r&lang=en`
          );
        const json = await response.json();

        setResults(
          json.data.map(item => {
            return item.images.preview.mp4;
          })
        );
        // console.log({ json })
      } finally {
        setLoading(false);
      }
    }
    if (query !== '') {
      fetchData();
    }
  }, [query]);

  return [results, loading];
}

export default function AsyncHooks() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [results, loading] = useGiphy(query);
console.log(results)

  return (
    <div>
      <h1>AsyncHooks</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          setQuery(search);
        }}
      >
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Buscar Gif"
        />
        <button type="submit">Buscar</button>
      </form>
      <br />
      {/* {results.map(item => (<h3 key={item}>{item}</h3>))} */}
      {loading ? (
        <h1>CARGANDO</h1>
      ) : (
          results.map(item => <video autoPlay loop key={item} src={item} />)
        )}
    </div>
  );
}