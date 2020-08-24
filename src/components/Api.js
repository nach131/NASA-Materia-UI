import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  //similar a componentDidMount y componentDidUpdate
  useEffect(async () => {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    const [item] = data.results
    setData(item);
    setLoading(false);
  }, [url]);
  return {data, loading};
}

export default () => {
  const [contar, setContar] = useState(0);
  const { data, loading } = useFetch("https://api.randomuser.me/")
  return (
    <div>
      <p>
        Tu click {contar} veces
    </p>
      <button onClick={() => setContar(contar + 1)}>Click</button>
      <h4>Nombre aleatorio</h4>
      {loading ? <h1>...loading</h1> : <h1>{data.name.first}</h1>}
    </div>
  );
};