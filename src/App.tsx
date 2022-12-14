import React, {useEffect, useState} from 'react';
import './App.sass';
import { Board } from './models/Board';
import BoardComponent from './components/BoardComponents';

const App = () => {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart()
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard)
  }
  return (
    <div className="app"> 
      <BoardComponent 
        board={board}
        setBoard = {setBoard} />
    </div>
  );
}

export default App;
