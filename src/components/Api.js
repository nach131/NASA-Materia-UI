import React, { useState, useEffect } from 'react';


export default () => {
  const [contar, setContar] = useState(0);
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  //similar a componentDidMount y componentDidUpdate
  useEffect(async () => {
    const respuesta = await fetch('https://api.randomuser.me/');
    const datos = await respuesta.json();
    const [item] = datos.results
    setUsuario(item);
    setLoading(false)
  }, [], );


  return (
    <div>
      <p>
        Tu click {contar} veces
    </p>
      <button onClick={() => setContar(contar + 1)}>Click</button>
      {loading ? <h1>...loading</h1> : <div>{usuario.name.first}</div>}
    </div>
  );

};