import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setMostrarFormulario } from '../redux/tareasSlice';
import { setIdUsuarioSeleccionado } from '../redux/usuariosSlice';
import Swal from 'sweetalert2';

function Formulario() {
   const dispatch = useDispatch();
   const [titulo, setTitulo] = useState('');
   const [completada, setCompletada] = useState(false);
   const idUsuarioSeleccionado = useSelector(state => state.usuarios.idUsuarioSeleccionado);
   function cerrarFormulario(){
        dispatch(setMostrarFormulario(false));
    }

    function crearTarea(){
      if(!titulo){
        Swal.fire({
            icon: "error",
            text: "El campo titulo es obligatorio",
        });
        return;
      }

      const json = {
        userId: idUsuarioSeleccionado,
        title: titulo,
        completed: completada,
      };

      fetch('https://jsonplaceholder.typicode.com/todos', {
          method: 'POST',
          body: JSON.stringify(json),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(json => {
          console.log('Tarea creada:', json);
          let mensaje = `Se creó la tarea ${json.title} con el id ${json.id} y su estatus ${json.completed ? 'es completada' : 'se encuentra pendiente'}`;
          Swal.fire({
              icon: "success",
              title: "Puedes revisar el resultado en consola",
              text: mensaje,
          });

        })
        .catch(error => {
          Swal.fire({
              icon: "error",
              title: `${error.message}`,
              text: "Ocurrió un error al enviar los datos",
          });
          console.log(error);
        });
    }

  return (
    <>
      <div className='mb-3'>
        <div className='card'>
          <div className='card-body'>
            <h4 className='card-title'>Crear Nueva Tarea</h4>
            <form className='p-4'>
                <div className='mb-3'>
                  <label htmlFor="titulo" className='form-label'>Título</label>
                  <input type="text" className='form-control' id="titulo" name='title' value={titulo} onChange={(e) => setTitulo(e.target.value)} required/>
                </div>
                <div className='form-check'>
                  <input className='form-check-input' type="checkbox" id="completada" name='completed' value={completada} onChange={(e) => setCompletada(e.target.checked)}/>
                  <label className='form-check-label' htmlFor="completada">
                    Completada
                  </label>
                </div>
            </form>
          </div>
          <div className='card-footer d-flex justify-content-center gap-3'>
            <button className='btn btn-secondary' onClick={() => cerrarFormulario()}>Cancelar</button>
            <button className='btn btn-primary' onClick={() => crearTarea()}>Crear</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Formulario
