//import Saludo from './components/Saludo'
import Producto from './components/Producto'
import Contador from './components/Contador'


function App(){
  return (
    <div>
      <h1>Tienda React</h1>
      {/** Comentarios*/}
      <Producto 
        nombre="Notebook Lenovo"
        precio="599.990"
      />
      <Producto 
        nombre = "Mouse Genius"
        precio = "20.000"
      />
      <Producto 
        nombre = "Monitor LG"
        precio = "190.900"
      />

    <h1>Contador!! </h1>
      <Contador /> {/** Así se llama el componente*/}

    </div>
  )
}

export default App
