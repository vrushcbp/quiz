import React from 'react'

function Result({ score, playAgain }) {
    return (
        <div className='score-board container'>
            <div className='score'>You Scored {score} / 5 correct answers...!</div>
            <button className='playBtn' onClick={playAgain}>Play Again</button>
        </div>
    )
}

export default Result
