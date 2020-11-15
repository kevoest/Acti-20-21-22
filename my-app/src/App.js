import  Parrafo from './components/Parrafo'
import Contador from './components/Contador'
import User from './components/User'
import Foco from './components/Foco'


function App() {
  return (
    <div >
      <h1>Hola mundo</h1>
      <Parrafo></Parrafo> 
      <Contador></Contador>
      <User></User>
      <Foco lugar="Sala"></Foco>
      <Foco lugar="Comedor"></Foco>
      <Foco lugar="Cocina"></Foco>
      <Foco lugar="Estancia"></Foco>
      <Foco lugar="Recamara Principal"></Foco>
      <Foco lugar="Recamara de los ninios"></Foco>
    </div>
  );
}

export default App;
