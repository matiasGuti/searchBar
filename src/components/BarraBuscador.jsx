import React from 'react';
import '../styles/BarraBuscador.css';

const BarraBuscador = ({actualizarFiltro}) => {
  return (
    <>
      <div className='header-container'>
        <h2 className='header-title'>Buscador de Colaboradores</h2>
        <input
          type='text'
          onChange={(ev) => actualizarFiltro(ev.target.value)}
          placeholder='Buscar un colaborador'
          className='search-input'
        />
      </div>
    </>
  );
};

export default BarraBuscador;
