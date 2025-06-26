import { useState } from 'react'
import { useEffect } from 'react'
import UsuarioCard from './componentes/UsuarioCard.jsx'

function App() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
      consumirAPI();
  }, []);

  function consumirAPI(){
    fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
              let arregloUsuarios = data.map(dato => {
                console.log(dato);
                  return {
                    id: dato.id,
                    nombre: dato.name,
                    email: dato.email,
                    username: dato.username,
                    telefono: dato.phone
                  };
              });
              setUsuarios(arregloUsuarios);
            });
  }

  return (
    <>
      <div className='m-5 d-flex justify-content-around gap-2'>
        <div className='row w-50'>
          {usuarios.map(usuario => {
            return (
              <UsuarioCard key={usuario.id} usuario={usuario} />
            );
          })}
        </div>
        <div className='d-flex justify-content-center w-50'>
          <h1>Hola</h1>
        </div>
      </div>
    </>
  )
}

export default App
