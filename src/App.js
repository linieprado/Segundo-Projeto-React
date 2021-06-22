import Titulo from './Components/Titulo/Titulo'
import Card from './Components/Card/Card'

import '../src/global.css'

function App() {
  
  return (
    <>
    <div>
      <Titulo texto="Meu Segundo Projeto React do Zero" />
      <h1>Harry Potter - Personagens </h1>       
      <Card/>
    </div>
    </>
  );
}

export default App;