import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUsuarios } from './redux/usuariosSlice';
import { useEffect } from 'react'
import UsuarioCard from './componentes/UsuarioCard.jsx'
import PostCard from './componentes/PostCard.jsx'
import TareaCard from './componentes/TareaCard.jsx'

function App() {
  const dispatch = useDispatch();
  const usuarios = useSelector(state => state.usuarios.usuarios);
  const posts = useSelector(state => state.posts.posts);
  const mostrarPosts = useSelector(state => state.posts.mostrarPosts);
  const tareas = useSelector(state => state.tareas.tareas);
  const mostrarTareas = useSelector(state => state.tareas.mostrarTareas);
  
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
          {mostrarPosts && (
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
          {mostrarTareas && (
            <>
              <h1 className='text-center'>Tareas</h1>
              <div className='d-flex flex-column'>
                {tareas.map(tarea => {
                  return (
                    <TareaCard key={tarea.id} tarea={tarea} />
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
