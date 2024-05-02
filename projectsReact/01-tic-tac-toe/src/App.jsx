import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./componnets/Square"
import { TURNS } from "./constants"
import { checkWinnerFrom, checkEndGame } from "./logic/board"
import { WinnerModal } from "./componnets/WinnerModal"


function App() {

  const [board, setBoard] = useState(() => {

    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
    

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // null es que no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null)
    
    
    


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }


  const updateBoard = (index) => {
    // No actualizamos esta posicion si ya tiene algo
    if (board[index] || winner) return
    // Actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Guardar aqui partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    // Revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Empate
    }

  }

  
  return (

    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
         
          board.map((square, index) => {
            return (
             <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
                >
                {square}
              </Square>
            )
          })

        }
      </section>

      <section className="turn">

        <Square isSelected={turn == TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.O}>
          {TURNS.O}
        </Square>

      </section>
        <button onClick={resetGame}>Game reset</button>
        
      <WinnerModal resetGame={resetGame} winner={winner}/>
      
    </main>
    
  )
    
}

export default App
