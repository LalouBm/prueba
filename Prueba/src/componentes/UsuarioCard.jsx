import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../redux/postsSlice';

function UsuarioCard({usuario}) {
   const {id, nombre, email, username, telefono} = usuario;
   const dispatch = useDispatch();

   async function obtenerPost(idUsuario){
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${idUsuario}/posts`);
      const data = await response.json();
      let arregloPosts = await Promise.all(
            data.map(async (dato) => {
              let arregloComentarios = await obtenerComentarios(dato.id);
              return {
                id: dato.id,
                titulo: dato.title,
                contenido: dato.body,
                comentarios: arregloComentarios
              };
        })
      );
      dispatch(setPosts(arregloPosts));

   }

   async function obtenerComentarios(idPost){

      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`);
      const comments = await res.json();

      return comments.map(comment => ({
        id: comment.id,
        email: comment.email,
        titulo: comment.name,
        contenido: comment.body
      }));
   }

  return (
    <>
      <div className='mb-3'>
        <div className='card card-width'>
          <div className="card-body card-width">
            <h4 title={nombre} className='card-title text-truncate'>{nombre}</h4>
            <p title={email} className='card-subtitle text-muted text-truncate lh-2' >@ {email}</p>
            <p title={telefono} className='card-subtitle fw-semibold' > <i class="fa-solid fa-phone-volume"></i> {telefono}</p>
            <div className="d-flex justify-content-end gap-2 mt-4">
              <button className='btn btn-primary' onClick={() => obtenerPost(id)}>Posts</button>
              <button className='btn btn-success'>Todo</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsuarioCard
