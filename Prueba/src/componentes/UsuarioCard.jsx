import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setMostrarPosts, setPosts } from '../redux/postsSlice';
import { setTareas, setMostrarTareas, setMostrarFormulario } from '../redux/tareasSlice';
import { setIdUsuarioSeleccionado } from '../redux/usuariosSlice';
import Swal from 'sweetalert2';


function UsuarioCard({usuario}) {
   const {id, nombre, email, username, telefono} = usuario;
   const idUsuarioSeleccionado = useSelector(state => state.usuarios.idUsuarioSeleccionado);
   let marcarCard = false;
   if(idUsuarioSeleccionado && idUsuarioSeleccionado==id){
      marcarCard = true;
   }
   const dispatch = useDispatch();

   function obtenerTareas(idUsuario){
      fetch(`https://jsonplaceholder.typicode.com/users/${idUsuario}/todos`)
        .then((response) => response.json())
        .then((data) => {
          let arregloTareas = data.map(tarea => {
              return {
                id: tarea.id,
                titulo: tarea.title,
                completada: tarea.completed
              };
          });
          arregloTareas = arregloTareas.sort((a, b) => b.id - a.id);
          dispatch(setTareas(arregloTareas));
          dispatch(setIdUsuarioSeleccionado(idUsuario));
          dispatch(setMostrarPosts(false));
          dispatch(setMostrarTareas(true));
          dispatch(setMostrarFormulario(false));
          
        }).catch(error => {
            Swal.fire({
                icon: "error",
                title: `${error.message}`,
                text: "Ocurrió un error al cargar las tareas",
            });
            console.log(error);
        });
   }

   async function obtenerPost(idUsuario){
    try { 
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${idUsuario}/posts`);
      const data = await response.json();
      let arregloPosts = await Promise.all(
            data.map(async (post) => {
              let arregloComentarios = await obtenerComentarios(post.id);
              return {
                id: post.id,
                titulo: post.title,
                contenido: post.body,
                comentarios: arregloComentarios
              };
        })
      );
      dispatch(setPosts(arregloPosts));
      dispatch(setIdUsuarioSeleccionado(idUsuario));
      dispatch(setMostrarTareas(false));
      dispatch(setMostrarPosts(true));
      dispatch(setMostrarFormulario(false));

    } catch (error) { 
      Swal.fire({
          icon: "error",
          title: `${error.message}`,
          text: "Ocurrió un error al cargar los posts",
      });
      console.log(error);
    }

   }

   async function obtenerComentarios(idPost){
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`);
        const data = await response.json();
  
        return data.map(comentario => ({
          id: comentario.id,
          email: comentario.email,
          titulo: comentario.name,
          contenido: comentario.body
        }));

      } catch(error) {
        Swal.fire({
            icon: "error",
            title: `${error.message}`,
            text: "Ocurrió un error al cargar los comentarios",
        });
        console.log(error);
      }
   }

  return (
    <>
      <div className='mb-3'>
        <div className={`card card-width ${marcarCard ? 'bg-info' : ''}`}>
          <div className="card-body card-width">
            <h4 title={nombre} className='card-title text-truncate'>{nombre}</h4>
            <p title={email} className='card-subtitle text-muted text-truncate lh-2' >@ {email}</p>
            <p title={telefono} className='card-subtitle fw-semibold' > <i className='fa-solid fa-phone-volume'></i> {telefono}</p>
            <div className="d-flex justify-content-end gap-2 mt-4">
              <button className='btn btn-primary' onClick={() => obtenerPost(id)}>Posts</button>
              <button className='btn btn-success' onClick={() => obtenerTareas(id)}>Todo</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsuarioCard
