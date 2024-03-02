import React from 'react';
import Button from './Button';

const DrawScreen = ( {score, handleReset, HandleNewGame}) => {
    return (
        <>
            <div className='bg-white/65 w-[290px] md:w-[380px] p-4 m-4'>
                <div className='bg-slate-600/50 text-white font-semibold text3xl text-center p-4'>

                    <div className='text-2xl font-semibold text-black'>
                        Draw
                    </div>
                    <div className='text-2xl font-semibold text-white'>
                        <p>Player  X : {score.playerx}</p>
                        <p>Player  O : {score.playery}</p>
                    </div>
                    <div className='flex justify-center'>
                        <span>
                            <Button text={'Reset Score'} buttonHandle={handleReset} />
                        </span>
                        <span>
                            <Button text={'New Game'} buttonHandle={HandleNewGame} />
                        </span>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DrawScreen