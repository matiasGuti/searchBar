import './App.css';
import { useState } from 'react';
import BarraBuscador from './components/BarraBuscador';
import FormularioColaborador from './components/FormularioColaborador';
import { BaseColaboradores } from './data/BaseColaboradores.js';

function App() {
  const [filtro, setFiltro] = useState('');

  return (
    <div className='App'>
      <BarraBuscador actualizarFiltro={setFiltro}/>
      <FormularioColaborador listaInicialColaboradores={BaseColaboradores} filtro={filtro} />
    </div>
  );
}

export default App;
