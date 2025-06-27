import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function TareaCard({tarea}) {
   const {id, titulo, completada} = tarea;
   const dispatch = useDispatch();

  return (
    <>
      <div className={`card mb-3 ${completada ? 'bg-success' : 'bg-warning'}`}>
          <div className={`card-header d-flex gap-2 justify-content-start align-items-center ${completada ? 'text-white' : 'text-black'}`}>
            <span>{id}</span>
            <span className='card-title mb-0'>{titulo}</span>
            {completada ? (
              <>
                <i className='fa-solid fa-circle-check'></i>
              </>
            ) : (
              <>
                <i className='fa-solid fa-circle-xmark'></i>
              </>
            )}
          </div>
      </div>
    </>
  )
}

export default TareaCard
