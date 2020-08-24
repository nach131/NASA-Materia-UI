import React, { useState, useEffect } from 'react';


export default () => {
  const [contar, setContar] = useState(0)

  //similar a componentDidMount y componentDidUpdate
  useEffect(async () => {
    const respuesta = await fetch();
  }, []);


  return (
    <div>
      <p>
        Tu click {contar} veces
    </p>
      <button onClick={() => setContar(contar + 1)}>Click</button>
    </div>
  );

};