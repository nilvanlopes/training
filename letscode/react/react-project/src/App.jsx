import MeuContador from "./components/Meucontador"
import Botao from "./components/Botao"
import Listas from "./components/listas"

function App() {

  return (
    <div>
      <h1>Hello World</h1>
      <AlgumaCoisa />
      <MeuContador />
      <Botao content='texto do botao' />
      <Listas />

    </div>

  )
}
function AlgumaCoisa() {
  return (
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque doloremque assumenda saepe asperiores earum tempora eaque rem distinctio placeat veritatis!</p>
  )
}
export default App
