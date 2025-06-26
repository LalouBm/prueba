import { useState } from 'react'

function UsuarioCard({usuario}) {
   const {nombre, email, username, telefono} = usuario;

  return (
    <>
      <div className='col-6 mb-3'>
        <div className='card'>
          <div className="card-body">
            <h4 className='card-title'>{nombre}</h4>
            <p className='card-subtitle text-muted'>{email}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsuarioCard
