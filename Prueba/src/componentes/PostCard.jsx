import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { setPosts } from '../redux/postsSlice';

function PostCard({post}) {
   const {id, titulo, contenido} = post;
   const dispatch = useDispatch();

  //  function obtenerPost(idUsuario){
  //     fetch(`https://jsonplaceholder.typicode.com/users/${idUsuario}/posts`)
  //                 .then((response) => response.json())
  //                 .then((data) => {
  //                   console.log(data);
  //                   let arregloPosts = data.map(dato => {
  //                     console.log(dato);
  //                       return {
  //                         id: dato.id,
  //                         titulo: dato.title,
  //                         contenido: dato.body,
  //                       };
  //                   });
  //                   dispatch(setPosts(arregloPosts));
  //                 });
  //  }

  return (
    <>
      <div className='mb-3'>
        <div className='card'>
          <div className="card-body">
            <h4 className='card-title'>{titulo}</h4>
            <p className='card-text'>{contenido}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostCard
