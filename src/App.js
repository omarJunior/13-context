import './App.css';
import { AppRouter } from './routing/AppRouter'
import { PruebaContext } from './context/PruebaContext';

function App() {
  const curso = {
    id: new Date().getTime(),
    titulo: "Master en TypeScript",
    contenido : "Muchas horas de contenido"
  }
  return (
    <div className="App">

      <PruebaContext.Provider value={curso}>
        <AppRouter />
      </PruebaContext.Provider>

    </div>
  );
}

export default App;
