import './App.css'
import { useState, useEffect, useRef } from 'react'
import GridElement from './Componets/GridElement'
import {
  arrowUp,
  arrowDown,
  arrowRight,
  arrowLeft,
} from './Componets/KeyFunctions'

let initialState = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

let pos1 = Math.floor(Math.random() * 16)
let pos2 = Math.floor(Math.random() * 16)
let score = 0
if (pos1 === pos2) pos2++

initialState[pos1] = Math.random() > 0.5 ? 4 : 2
initialState[pos2] = Math.random() > 0.5 ? 4 : 2

function App() {
  const [mainGrid, setgrid] = useState(initialState)
  const [win, setwin] = useState(false)
  const [over, setover] = useState(false)
  let ref = useRef()

  const generate = (data) => {
    let pos = Math.floor(Math.random() * 16)

    if (data[pos] === 0) {
      data[pos] = Math.random() > 0.5 ? 4 : 2
      setgrid((previous) => data)
    } else {
      if (data.includes(0)) {
        generate(data)
      }
    }
  }

  const clickHandler = (e) => {
    console.log(e.target.name)
    let newGrid = []
    let gridElements = [...mainGrid]

    switch (e.target.name) {
      case 'arrowUp':
        newGrid = arrowUp(gridElements)
        break
      case 'arrowLeft':
        newGrid = arrowLeft(gridElements)
        break
      case 'arrowRight':
        newGrid = arrowRight(gridElements)
        break
      case 'arrowDown':
        newGrid = arrowDown(gridElements)
        break
      default:
        break
    }

    generate(newGrid)

    checkGameOver()
  }

  const checkGameOver = () => {
    
    if (JSON.stringify(ref.current) === JSON.stringify(mainGrid)) {
      for (let i = 0; i < 16; i++) {
        console.log(mainGrid[i],mainGrid[i+1],mainGrid[i+4],mainGrid[i-1],mainGrid[i+4])
        if (
          mainGrid[i] === mainGrid[i+1] ||
          mainGrid[i] === mainGrid[i+4] ||
          mainGrid[i] === mainGrid[i-1] ||
          mainGrid[i] === mainGrid[i-4]
        ) {
          console.log('sumething')
          return
        }
      }

      setover(true)
    } else {
      ref.current = mainGrid
    }
  }

  useEffect(() => {
    score = mainGrid.reduce((item, acc) => {
      acc = acc + item
      return acc
    }, 0)

    if (score === 2048) {
      setwin(true)
    }
  }, [mainGrid])

  return (
    <div className="App">
      <div className="title">2048</div>
      <div className="score">Score :{score}</div>
      {win && <div><h1>You WIN✨😎</h1></div>}
      {over && <div><h1>Game Over😑</h1></div>}
      <div className="container">
        <div className="arrowKeys">
          <div className="up">
            <button name="arrowUp" onClick={clickHandler}>
              &uarr;
            </button>
          </div>
          <div className="leftright">
            <button name="arrowLeft" onClick={clickHandler}>
              &larr;
            </button>
            <button name="arrowRight" onClick={clickHandler}>
              &rarr;
            </button>
          </div>
          <div className="down">
            <button name="arrowDown" onClick={clickHandler}>
              &darr;
            </button>
          </div>
        </div>
        <div className="grid">
          {mainGrid.map((item, index) => (
            <GridElement key={index}>{item}</GridElement>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
