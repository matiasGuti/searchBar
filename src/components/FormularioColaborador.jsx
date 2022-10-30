import React, { useState } from 'react';
import '../styles/FormularioColaborador.css';
import { v4 as uuidv4 } from 'uuid';

const FormularioColaborador = ({ listaInicialColaboradores, filtro }) => {
  const [listaColaboradores, setListaColaboradores] = useState(listaInicialColaboradores);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  const actualizarNombre = (ev) => {
    setNombre(ev.target.value);
  };

  const actualizarCorreo = (ev) => {
    setCorreo(ev.target.value);
  };

  const agregarColaborador = (ev) => {
    ev.preventDefault();

    //debe haber valor en los inputs
    if (nombre === '' || correo === '') {
      alert('Debe ingresar un valor');
      return;
    }

    const nuevoColaborador = {
      id: uuidv4(),
      nombre: nombre,
      correo: correo,
    };

    setNombre('');
    setCorreo('');

    const listaColaboradoresActualizada = [
      ...listaColaboradores,
      nuevoColaborador,
    ];
    setListaColaboradores(listaColaboradoresActualizada);
  };

  //Array filtrado por barra buscador
  const listaFiltrada = listaColaboradores.filter((colaborador) => {
    //En caso de que no haya nada escrito en la barra se pasara el valor original
    return (filtro === '') ? colaborador : colaborador.nombre.includes(filtro) || colaborador.correo.includes(filtro)

  });

  return (
    <>
      <form onSubmit={agregarColaborador}>
        <label>Nombre del colaborador</label>
        <input
          type='text'
          placeholder='Ingresa el nombre del colaborador'
          onChange={actualizarNombre}
          value={nombre}
        />
        <label>Correo del colaborador</label>
        <input
          type='text'
          placeholder='Ingresa correo del colaborador'
          onChange={actualizarCorreo}
          value={correo}
        />
        <button>Agregar al colaborador</button>
      </form>
      <div className='list-container'>
        <h2>Listado de colaboradores</h2>
        <ul>
          {listaFiltrada.map((colaborador) => (
            <li key={colaborador.id}>
              {colaborador.nombre} - {colaborador.correo}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FormularioColaborador;
