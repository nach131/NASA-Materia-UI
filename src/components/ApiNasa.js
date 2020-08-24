import React, { useState, useEffect } from 'react';


export default () => {
  const [tokemo, setTokemo] = useState(null);

  // similar a componentDidMount y componentDidUpdate
  useEffect(async () => {
    
    const respuesta = await fetch('https://images-api.nasa.gov/search?q=curiosity&page=5');
    const datos = await respuesta.json();
    const item = datos.collection.items.data[0]
    setTokemo(item);
    console.log()
  }, []);


  return (
    <div>
    <h1>ddede</h1>
      <p>
        Esto es de la NASA
    </p>
      {tokemo && <div>{tokemo.description}</div>}
    </div>
  );

};