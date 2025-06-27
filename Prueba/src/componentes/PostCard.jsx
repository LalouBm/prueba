import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ComentarioCard from './ComentarioCard.jsx'
// import { setPosts } from '../redux/postsSlice';

function PostCard({post}) {
   const {id, titulo, contenido, comentarios} = post;
   const dispatch = useDispatch();

  return (
    <>
      <div className='mb-3'>
        <div className='card'>
          <div className='card-body'>
            <h4 className='card-title text-uppercase'>{titulo}</h4>
            <p className='card-text'>{contenido}</p>
          </div>
          <div className='card-footer'>
            <h4>Comentarios</h4>
            {comentarios.map(comentario => <ComentarioCard key={comentario.id} comentario={comentario} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default PostCard
