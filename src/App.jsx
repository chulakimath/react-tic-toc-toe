import React, { useEffect, useRef, useState } from 'react';
import Input from './components/Input';
import Result from './components/Result';
import DrawScreen from './components/DrawScreen';

const App = () => {
  const [array, setArray] = useState(['', '', '', '', '', '', '', '', '']);

  const [user, SetUser] = useState("O");

  const [winner, setWinner] = useState(false);

  const [isDraw, setIsDraw] = useState(false);

  let initialRenderSkip = useRef(true);

  const [score, setScore] = useState({
    playerx: 0,
    playery: 0,
  });

  useEffect(() => {
    if (initialRenderSkip.current) {
      initialRenderSkip.current = false;
    } else {
      if (winner) if (user === 'X') {
        setScore(prev => ({ ...prev, playery: prev.playery + 1 }));
        SetUser('O')
      }
      else {
        setScore(prev => ({ ...prev, playerx: prev.playerx + 1 }))
        SetUser('O')
      }
    }
  }
    , [winner]);

  useEffect(() => {

    SetUser(prev => prev === 'X' ? 'O' : 'X')
    let chkArray = array;
    if (chkArray[0] === 'X' && chkArray[1] === 'X' && chkArray[2] === 'X' || chkArray[0] === 'O' && chkArray[1] === 'O' && chkArray[2] === 'O') {
      setWinner(true)
    }
    else if (chkArray[3] === 'X' && chkArray[4] === 'X' && chkArray[5] === 'X' || chkArray[3] === 'O' && chkArray[4] === 'O' && chkArray[5] === 'O') {
      setWinner(true)
    }
    else if (chkArray[6] === 'X' && chkArray[7] === 'X' && chkArray[8] === 'X' || chkArray[6] === 'O' && chkArray[7] === 'O' && chkArray[8] === 'O') {
      setWinner(true)
    }
    else if (chkArray[0] === 'X' && chkArray[3] === 'X' && chkArray[6] === 'X' || chkArray[0] === 'O' && chkArray[3] === 'O' && chkArray[6] === 'O') {
      setWinner(true)
    }
    else if (chkArray[1] === 'X' && chkArray[4] === 'X' && chkArray[7] === 'X' || chkArray[1] === 'O' && chkArray[4] === 'O' && chkArray[7] === 'O') {
      setWinner(true)
    }
    else if (chkArray[2] === 'X' && chkArray[5] === 'X' && chkArray[8] === 'X' || chkArray[2] === 'O' && chkArray[5] === 'O' && chkArray[8] === 'O') {
      setWinner(true)
    }
    else if (chkArray[0] === 'X' && chkArray[4] === 'X' && chkArray[8] === 'X' || chkArray[0] === 'O' && chkArray[4] === 'O' && chkArray[8] === 'O') {
      setWinner(true)
    }
    else if (chkArray[2] === 'X' && chkArray[4] === 'X' && chkArray[6] === 'X' || chkArray[2] === 'O' && chkArray[4] === 'O' && chkArray[6] === 'O') {
      setWinner(true)
    }
    else if (!chkArray.includes('')) {
      setIsDraw(true);
      console.log('draw');
    }
  }, [array]);

  const ChangeclickHandler = (dataIndex) => {
    if (array[dataIndex] !== 'X' && array[dataIndex] !== 'O') {
      setArray(prev => (
        prev.map((item, index) => (
          dataIndex == index ? user : item
        ))
      ))
    }
  }

  const handleReset = () => {
    setScore(prev => ({
      playerx: 0,
      playery: 0,
    }))
    setArray(['', '', '', '', '', '', '', '', ''])
    setWinner(false);
    setIsDraw(false);
  }
  const HandleNewGame = () => {
    setArray(['', '', '', '', '', '', '', '', ''])
    setWinner(false);
    setIsDraw(false);
  }

  return (
    <>
      <div className='bg-zinc-900 p-3 sm:p-5 flex flex-col items-center gap-3 select-none'>
        <div className='bg-white/65 w-[300px] md:w-[380px]'>
          <h1 className='text-3xl text-center font-bold'>Tic Tac Toe</h1>
        </div>
        <div className='bg-white/65 w-[300px] md:w-[380px]'>
          <div className='text-2xl font-bold  text-center p-3'>
            chance of player {user}
          </div>
        </div>
        <div className='bg-white/65 w-[300px] md:w-[380px]'>
          <div className='text-xl font-bold  text-center p-3'>
            <p>Player X - {score.playerx}</p>
            <p>Player O - {score.playery}</p>
          </div>
        </div>
        {isDraw ? <DrawScreen
          score={score}
          handleReset={handleReset}
          HandleNewGame={HandleNewGame} />
          :
          !winner ?
            < div className='bg-white/50 grid grid-cols-3 gap-7 sm:gap-4 w-fit p-4 sm:p-6'>
              {
                array.map((item, index) => (
                  <Input key={index} item={item} id={index} ChangeclickHandler={ChangeclickHandler} />
                ))
              }
            </div>
            :
            <Result
              player={user === 'X' ? 'O' : 'X'}
              score={score}
              handleReset={handleReset}
              HandleNewGame={HandleNewGame} />
        }

      </div >
    </>
  )
}

export default App