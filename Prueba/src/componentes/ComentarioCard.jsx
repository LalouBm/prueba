import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function ComentarioCard({comentario}) {
   const {id, email, titulo, contenido} = comentario;
   const dispatch = useDispatch();

  return (
    <>
      <div className='card mb-3'>
          <div className='card-header'>
            {email}
          </div>
          <div className='card-body'>
            <h5 className='card-title'>{titulo}</h5>
            <p className='card-text'>{contenido}</p>
          </div>
      </div>
    </>
  )
}

export default ComentarioCard
