import Board from "./TicTacToe/Board";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gameBox">
        <h1 className="title">Tic Tac Toe</h1>
        <Board />
      </div>
    </div>
  );
}

export default App;
