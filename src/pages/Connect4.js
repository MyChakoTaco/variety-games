import React, { useState, useEffect, useRef } from 'react'
import './Connect4.css'

const _ROWS = 6
const _COLS = 7

function Connect4() {
    function createInitialGameState() {
        const state = []
        for (let i = 0; i < _COLS; i++) {
            state.push([])
            for (let j = 0; j < _ROWS; j++)
                state[i].push(0)
        }
        return state
    }

    const [isPlayingGame, setIsPlayingGame] = useState(true)
    const [round, setRound] = useState(0)
    const [playerTurn, setPlayerTurn] = useState("")
    const [winner, setWinner] = useState("")
    const [gameState, setGameState] = useState(createInitialGameState())

    const restartButton = useRef()

    console.log(gameState)

    const tiles = gameState.map((col, colIndex) => {
        let canDropCol = col.includes(0)

        return col.map((row, rowIndex) => {
            return (
                <div
                    key={`${colIndex}${rowIndex}`}
                    className="tile">
                    {colIndex}, {rowIndex}
                </div>
            )
        })
    })

    return (
        <div className="connect4-container">
            <div className="connect4">
                {tiles}
            </div>
            <div className="connect4-ui">

            </div>
        </div>
    )
}

export default Connect4