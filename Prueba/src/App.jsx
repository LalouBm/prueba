import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUsuarios } from './redux/usuariosSlice';
import { useEffect } from 'react'
import UsuarioCard from './componentes/UsuarioCard.jsx'
import PostCard from './componentes/PostCard.jsx'

function App() {
  const dispatch = useDispatch();
  const usuarios = useSelector(state => state.usuarios.usuarios);
  const posts = useSelector(state => state.posts);
  const tareas = useSelector(state => state.tareas);
  
  // const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
      consumirAPI();
  }, []);

  function consumirAPI(){
    fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
              let arregloUsuarios = data.map(usuario => {
                  return {
                    id: usuario.id,
                    nombre: usuario.name,
                    email: usuario.email,
                    username: usuario.username,
                    telefono: usuario.phone
                  };
              });
              dispatch(setUsuarios(arregloUsuarios));
            });
  }

  return (
    <>
      <div className='m-5 row'>
        <div className='col-6'>
          <div className='gridUsuarios' >
            {usuarios.map(usuario => <UsuarioCard key={usuario.id} usuario={usuario} />)}
          </div>
        </div>
        <div className='col-6'>
          {posts.length!==0 && (
            <>
              <h1 className='text-center'>Publicaciones</h1>
              <div className='d-flex flex-column'>
                {posts.map(post => {
                  return (
                    <PostCard key={post.id} post={post} />
                  );
                })}
              </div>
            </>
          )}
          
        </div>
      </div>
    </>
  )
}

export default App
