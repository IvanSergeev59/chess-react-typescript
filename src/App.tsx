import React, {useState} from 'react';
import './App.sass';
import { Board } from './models/Board';

const App = () => {
  const [board, setBoard] = useState(new Board())

  function restart() {
    const newBoard = new Board()
  }
  return (
    <div className="app">      
      <p>work</p>
      <BoardComponent />
    </div>
  );
}

export default App;
