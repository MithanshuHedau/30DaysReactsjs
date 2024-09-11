import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const winner = calculateWinner(board);
  const currentPlayer = isXNext ? 'X' : 'O';

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setIsXNext(!isXNext);

    // Check for winner after the move
    const nextWinner = calculateWinner(newBoard);
    if (nextWinner) {
      setModalMessage(`Winner: ${nextWinner} 🎉`);
      setShowModal(true);
    } else if (newBoard.every((cell) => cell)) {
      setModalMessage(`It's a Draw! 🤝`);
      setShowModal(true);
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setShowModal(false); // Hide the modal
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 p-4">
      <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">Tic-Tac-Toe</h1>

      <div className="grid grid-cols-3 gap-4 w-72 md:w-96 lg:w-[28rem] shadow-2xl rounded-lg p-4 bg-white">
        {board.map((value, index) => (
          <div
            key={index}
            className={`w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-100 flex items-center justify-center border-4 rounded-lg cursor-pointer transition-transform transform hover:scale-110 ${
              value === 'X' ? 'text-orange-500' : 'text-blue-500'
            } text-4xl md:text-5xl lg:text-6xl font-bold`}
            onClick={() => handleClick(index)}
          >
            {value}
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <h2 className="text-2xl font-semibold text-white drop-shadow-md">{`Next Player: ${currentPlayer}`}</h2>
      </div>

      <button
        onClick={handleReset}
        className="mt-8 bg-gradient-to-r from-orange-400 to-yellow-400 text-white py-3 px-8 rounded-full font-semibold text-lg hover:from-orange-500 hover:to-yellow-500 transition-transform transform hover:scale-105 shadow-lg"
      >
        Reset Game
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{modalMessage}</h2>
            <button
              onClick={handleReset}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg w-full mt-4 hover:bg-blue-600 transition"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Function to check if there is a winner
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;
