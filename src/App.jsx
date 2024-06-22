import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Borde from './componentes/Borde'
import borde from './assets/borde.png'
import Chicos from './componentes/Chicos'
import chicos from './assets/chicos.png'
import Organico from './componentes/Organico'
import organico from './assets/organico.png'
import Onclick from './componentes/Onclick'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    < Organico imagen={organico} />
    <Borde imagen={borde} />
    <Onclick />
    <Chicos imagen={chicos} />
    

      </div>
      
    </>
  )
}

export default App
