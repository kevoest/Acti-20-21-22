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
      <Foco lugar="Cocina"></Foco>
      <Foco lugar="Recamara"></Foco>
      <Foco lugar="Banio"></Foco>
    </div>
  );
}

export default App;
