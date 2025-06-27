import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsuarios } from './redux/usuariosSlice';
import { setMostrarFormulario } from './redux/tareasSlice';
import UsuarioCard from './componentes/UsuarioCard.jsx';
import PostCard from './componentes/PostCard.jsx';
import TareaCard from './componentes/TareaCard.jsx';
import Formulario from './componentes/Formulario.jsx';
import Swal from 'sweetalert2';

function App() {
  const dispatch = useDispatch();
  const usuarios = useSelector(state => state.usuarios.usuarios);
  const posts = useSelector(state => state.posts.posts);
  const mostrarPosts = useSelector(state => state.posts.mostrarPosts);
  const tareas = useSelector(state => state.tareas.tareas);
  const mostrarTareas = useSelector(state => state.tareas.mostrarTareas);
  const mostrarFormulario = useSelector(state => state.tareas.mostrarFormulario);
  
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
            }).catch(error => {
                Swal.fire({
                    icon: "error",
                    title: `${error.message}`,
                    text: "Ocurrió un error al cargar los usuarios",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: false

                });
                console.log(error);
            });
  }

  function abrirFormulario(){
      dispatch(setMostrarFormulario(true));
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
              {
                mostrarFormulario ? (
                  <>
                    <Formulario />
                  </>
                ) : (
                  <>
                    <div className='d-flex justify-content-end'>
                      <button className='mb-3 btn btn-outline-info btn-lg' onClick={() => abrirFormulario()}>Nueva Tarea</button>
                    </div>
                  </>
                )
              }
              
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
