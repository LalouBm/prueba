import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function ComentarioCard({comentario}) {
   const {id, email, titulo, contenido} = comentario;
   const dispatch = useDispatch();

  return (
    <>
      <div class="card mb-3">
          <div class="card-header">
            {email}
          </div>
          <div class="card-body">
            <h5 class="card-title">{titulo}</h5>
            <p class="card-text">{contenido}</p>
          </div>
      </div>
    </>
  )
}

export default ComentarioCard
