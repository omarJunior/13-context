import './App.css';
import { AppRouter } from './routing/AppRouter'
import { PruebaContext } from './context/PruebaContext';
import { useEffect, useState } from 'react';

function App() {

  const [usuario, setUsuario] = useState({})

  useEffect(()=>{
    //La primera vez que se cargue el componente
    setUsuario(JSON.parse(localStorage.getItem("usuario")))
  }, [])

  useEffect(()=>{
    //cada vez que se actualize el estado usuario se guarda en el localStorage
    localStorage.setItem("usuario", JSON.stringify(usuario))
  }, [usuario])

  const curso = {
    id: new Date().getTime(),
    titulo: "Master en TypeScript",
    contenido : "Muchas horas de contenido"
  }
  return (
    <div className="App">

      <PruebaContext.Provider value={{
        usuario,
        setUsuario
      }}>
        <AppRouter />
      </PruebaContext.Provider>

    </div>
  );
}

export default App;
