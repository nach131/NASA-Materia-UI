import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  // const [data, setData] = useState(null);
  const [tileData, setTiledData] = useState([]); // pillada

  const [loading, setLoading] = useState(true);
  //similar a componentDidMount y componentDidUpdate
  useEffect(async () => {
    const respuesta = await fetch(url);
    const responseData = await respuesta.json();
    // const [item] = data.results
    // setData(item);
    
  }, [url]);
  return {responseData, loading};
}


export default () => {
  // const [contar, setContar] = useState(0);
  const { data, loading } = useFetch("https://api.unsplash.com/photos/?client_id=3bf8d40569267ba2a37d1270433ee9f5745a4a39e911b8ac97c87e26485c9d78&per_page=28")

  return (
    <div>
      {/* <p>
        Tu click {contar} veces
    </p>
      <button onClick={() => setContar(contar + 1)}>Click</button> */}
      {/* {loading ? <h1>...loading</h1> : <div>{data.picture.large}</div>} */}
    </div>
  );

};