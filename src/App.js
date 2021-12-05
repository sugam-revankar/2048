import './App.css'
import { useState } from 'react'
import GridElement from './Componets/GridElement'

function App() {
  const [grid, setgrid] = useState([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ])

  document.addEventListener("keydown",e=>{
    console.log(e.key);
    console.log("sugam");
  })


  return (
    <div className="App">
      <div className="title">2048</div>
      <div className="score">0</div>
      <div className="grid">
        {grid.map((number, index) => (
          <GridElement key={index}>{number}</GridElement>
        ))}
      </div>
    </div>
  )
}

export default App
