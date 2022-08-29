import { userState } from 'react';
import Header from './components/Cabecera'
import List from './components/Listado'

// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {

  const [itemCount , setCounter] = userState(0)
  const addItem = () => {
    setCounter(itemCount+1)
  }

  return (
    <div className="App">
      <Header items={itemCount}/>
      <List addItem={addItem}/>
    </div>
  );
}

export default App;


