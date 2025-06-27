import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../redux/postsSlice';

function UsuarioCard({usuario}) {
   const {id, nombre, email, username, telefono} = usuario;
   const dispatch = useDispatch();

   function obtenerPost(idUsuario){
      fetch(`https://jsonplaceholder.typicode.com/users/${idUsuario}/posts`)
                  .then((response) => response.json())
                  .then((data) => {
                    let arregloPosts = data.map(dato => {
                        return {
                          id: dato.id,
                          titulo: dato.title,
                          contenido: dato.body,
                        };
                    });
                    dispatch(setPosts(arregloPosts));
                  });
   }

  return (
    <>
      <div className='mb-3'>
        <div className='card'>
          <div className="card-body">
            <h4 className='card-title'>{nombre}</h4>
            <p className='card-subtitle text-muted'>{email}</p>
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
