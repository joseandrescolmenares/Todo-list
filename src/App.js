import React, { createContext, useState } from 'react';
import './App.css'
import Tareas from './components/Tareas';

export const Context = createContext({ lista: [], setLista: () => { } });

function App() {

  const [lista, setLista] = useState([])

  return (
    <Context.Provider value={{
      lista, setLista
    }}>
      <Tareas />
    </Context.Provider>
  );
}

export default App;
