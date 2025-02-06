import { useEffect, useState } from "react";
import "../styles/Table.css";
import X from '../assets/X.svg';
import O from '../assets/O.svg';
import Xsquare from '../assets/Xsquare.svg';
import Osquare from '../assets/Osquare.svg';
import { useSelector } from 'react-redux';

function Square({ value, onClick , playerPick }) {
  return (
    <button onClick={onClick} className={`field ${value ? "" : playerPick === 'X' ? "hover-x" : "hover-o"}`}>
      {value === "X" && <img className="FiedImg" src={Xsquare} alt="X" />}
      {value === "O" && <img className="FiedImg" src={Osquare} alt="O" />}
    </button>
  );
}

function Board({ squares, onSquareClick , playerPick }) {
  return (
    <div className="tableWrapper">
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onSquareClick(index)} playerPick={playerPick}
        />
      ))}
    </div>
  );
}

export function VsCpu() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const [ scores , setScores]=useState({X:0 , O:0 , ties:0});
  const [showModal, setShowModal] = useState(false);
  const [resetModal , setResetModal]= useState(false);
  const [modalContent, setModalContent] = useState("");
  const [pickWinner, setPickWinner] = useState("");
  const playerPick = useSelector((state) => state.user.playerPick);
  const [cpuFirst, setCpuFirst] = useState(false);
  const cpuPick = playerPick === "X" ? "O" : "X";
  console.log("Redux playerPick:",playerPick ); // 🔍 Debug


  const winner = calculateWinner(squares);
  console.log("Winner:", winner); // 🔍 Debug

  useEffect(() => {
    if (winner) {
      setModalContent(
        <>
          {winner === "X" ? (
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M53.2406 1.14742C52.0691 -0.0241513 50.1696 -0.0241497 48.998 1.14742L32 18.1454L15.002 1.14742C13.8304 -0.0241506 11.9309 -0.0241496 10.7594 1.14742L1.14742 10.7594C-0.0241497 11.9309 -0.0241481 13.8304 1.14742 15.002L18.1454 32L1.14742 48.998C-0.0241506 50.1696 -0.0241496 52.0691 1.14742 53.2406L10.7594 62.8526C11.9309 64.0241 13.8304 64.0241 15.002 62.8526L32 45.8546L48.998 62.8526C50.1696 64.0242 52.0691 64.0241 53.2406 62.8526L62.8526 53.2406C64.0242 52.0691 64.0241 50.1696 62.8526 48.998L45.8546 32L62.8526 15.002C64.0242 13.8304 64.0241 11.9309 62.8526 10.7594L53.2406 1.14742Z"
                fill="#31C3BD"
              />
            </svg>
          ) : (
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32ZM18.963 32C18.963 24.7998 24.7998 18.963 32 18.963C39.2002 18.963 45.037 24.7998 45.037 32C45.037 39.2002 39.2002 45.037 32 45.037C24.7998 45.037 18.963 39.2002 18.963 32Z"
                fill="#F2B137"
              />
            </svg>
          )}
          TAKES THE ROUND
        </>
      );
      setPickWinner(winner === "X" ? playerPick === "X" ? "YOU WON !" : "OH NO , YOU LOST …" : playerPick === "O" ? "YOU WON !" : "OH NO , YOU LOST …");
      setShowModal(true);
      startGame(playerPick === 'O' ? true : false);
      setScores((prevScores) => ({
        ...prevScores,
        [winner]: prevScores[winner] + 1,
      }));
      setSquares(Array(9).fill(null));
    } else if (!squares.includes(null)) {
      // It's a tie
      setModalContent("ROUND TIED");
      setPickWinner("");
      setShowModal(true);
      setScores((prevScores) => ({
        ...prevScores,
        ties: prevScores.ties + 1,
      }));
      setSquares(Array(9).fill(null));
    }
  }, [winner,squares]);

  useEffect(() => {
    if(cpuFirst){
      setIsNext(false);
      setTimeout(cpuMove, 1000);
    }
  },[cpuFirst]);

  useEffect(() => {
    if(!isNext){
      setTimeout(cpuMove, 1000);
    }
  },[isNext,squares]);
  

  function handleClick(index) {
    if (squares[index] || calculateWinner(squares) || !isNext ) return;

    const nextSquare = squares.slice();
    nextSquare[index] = playerPick;
    setSquares(nextSquare);
    setIsNext(false);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setScores({ X: 0, O: 0, ties: 0 });
    setIsNext(true);
  }
  
  function resetBtn(){
      setResetModal(true);
  }

  function cpuMove(){
    if(calculateWinner(squares) || squares.every(square => square !=null)) return;
    
    let emptySquares = squares.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
    let randomMove = emptySquares[Math.floor(Math.random() * emptySquares.length)];

    if(randomMove !== undefined){
      const nextSquare = squares.slice();
      nextSquare[randomMove] = cpuPick;
      setSquares(nextSquare);
      setIsNext(true);
    }
  }

  function startGame(cpuStarts){
    setCpuFirst(cpuStarts);
    setSquares(Array(9).fill(null));
    setIsNext(!cpuStarts);
  }

  useEffect(() => {
    startGame(playerPick === 'O' ? true : false);
  },[]);

  return (
    <div className="container">
      {/* Header */}
      <div className="headerWrapper">
        <div className="logoWrapper">
          {/* SVG logo */}
          <svg className="logoSVG" width="72" height="32" viewBox="0 0 72 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 2">
              <path
                id="Combined Shape Copy"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.681 1.63437C26.5094 0.462798 24.6099 0.4628 23.4383 1.63437L16 9.07271L8.56166 1.63437C7.39009 0.462798 5.49059 0.4628 4.31902 1.63437L1.63437 4.31902C0.462799 5.49059 0.462801 7.39009 1.63437 8.56166L9.07271 16L1.63437 23.4383C0.462798 24.6099 0.4628 26.5094 1.63437 27.681L4.31902 30.3656C5.49059 31.5372 7.39009 31.5372 8.56166 30.3656L16 22.9273L23.4383 30.3656C24.6099 31.5372 26.5094 31.5372 27.681 30.3656L30.3656 27.681C31.5372 26.5094 31.5372 24.6099 30.3656 23.4383L22.9273 16L30.3656 8.56166C31.5372 7.39009 31.5372 5.49059 30.3656 4.31902L27.681 1.63437Z"
                fill="#31C3BD"
              />
              <path
                id="Oval Copy"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M71.9704 15.8706C71.9704 7.10551 64.8649 0 56.0998 0C47.3348 0 40.2292 7.10551 40.2292 15.8706C40.2292 24.6357 47.3348 31.7412 56.0998 31.7412C64.8649 31.7412 71.9704 24.6357 71.9704 15.8706ZM49.634 15.8706C49.634 12.2996 52.5289 9.4048 56.0998 9.4048C59.6708 9.4048 62.5656 12.2996 62.5656 15.8706C62.5656 19.4416 59.6708 22.3364 56.0998 22.3364C52.5289 22.3364 49.634 19.4416 49.634 15.8706Z"
                fill="#F2B137"
              />
            </g>
          </svg>
        </div>

        <div className="turnWrapper">
        <h2 className="h2-winner">
  {isNext ? (
    <img className="TurnIMG" src={X} alt="X turn" />
  ) : (
    <img className="TurnIMG" src={O} alt="O turn" />
  )} TURN
</h2>
        </div>

        <button className="resetButton" onClick={resetBtn}>
            <svg className="resetSvg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5241 2.75843e-07H17.644C17.3812 -0.000279724 17.1679 0.21264 17.1676 0.47564C17.1676 0.48336 17.1678 0.49108 17.1681 0.4988L17.3268 3.78292C15.46 1.58176 12.7198 0.31428 9.83484 0.31744C4.41536 0.31748 -0.00395734 4.74324 2.65924e-06 10.1663C0.00396266 15.598 4.40584 20 9.83484 20C12.2702 20.0034 14.6195 19.0993 16.425 17.4639C16.6208 17.2885 16.6375 16.9874 16.4622 16.7915C16.4563 16.7849 16.4502 16.7785 16.444 16.7722L15.0957 15.423C14.9186 15.2459 14.6346 15.2363 14.4461 15.4012C11.5521 17.949 7.14188 17.6669 4.59564 14.7709C2.0494 11.875 2.3314 7.46188 5.22544 4.914C8.11948 2.36612 12.5297 2.64828 15.0759 5.54424C15.2755 5.77124 15.4601 6.01096 15.6287 6.26188L11.6024 6.06864C11.3398 6.05616 11.1169 6.25896 11.1044 6.52168C11.104 6.5294 11.1038 6.53712 11.1039 6.54484V8.4262C11.1039 8.6892 11.3169 8.9024 11.5798 8.9024H19.5242C19.787 8.9024 20 8.6892 20 8.4262V0.4762C20 0.2132 19.787 2.75843e-07 19.5241 2.75843e-07Z" fill="#1F3641"/>
            </svg>
        </button>
      </div>

      {/* Game Board */}
      <div className="tableWrapper">
        <Board squares={squares} onSquareClick={handleClick} playerPick={playerPick} />
      </div>

      {/* Results */}
      <div className="resultWrapper">
        <div className="x-result">
            <p className="p-result">X ( {playerPick === "X" ? "YOU" : "CPU"} )</p>
            <p className="p-result1">{scores.X}</p>
            </div>
        <div className="ties-result">
            <p className="p-result">Ties</p>
            <p className="p-result1">{scores.ties}</p>
            </div>
        <div className="o-result">
            <p className="p-result">O ( {playerPick === "O" ? "YOU" : "CPU"} )</p>
            <p className="p-result1">{scores.O}</p>
            </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p className="p-modal">
              {pickWinner} 
            </p>
            <h2 className="h2-modal">
             {modalContent}
             </h2>
          <div className="modal-buttons">
          <a href="/">
            <button className="quitButton">
              QUIT
            </button>
            </a>
            <button className="nextButtonModa" onClick={() =>{ setShowModal(false)
              setIsNext(true);
            }}>NEXT ROUND</button>
           
          </div>
            
          </div>
        </div>
      )}

      {resetModal && (
        <div className="modal-overlay">
        <div className="modal">
          <h2 className="h2-modal-restart">
          RESTART GAME ?
          </h2>
        <div className="modal-buttons">
        <a href="/">
          <button className="cancelButton">
          NO, CANCEL
          </button>
          </a>
          <button className="restartButtonModa" onClick={() =>{ setResetModal(false)
            resetGame();
          }}>YES, RESTART</button>
         
        </div>
          
        </div>
      </div>
      )}
    </div>
  );
}

// Funkcija za proveru pobednika
function calculateWinner(squares) {
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

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}