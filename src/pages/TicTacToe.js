import React, { useState, useEffect, useRef } from 'react'
import './TicTacToe.css'

function TicTacToe() {
    const [isPlayingGame, setIsPlayingGame] = useState(true)
    const [playerTurn, setPlayerTurn] = useState("X")
    const [gameState, setGameState] = useState(
        ["", "", "", "", "", "", "", "", ""]
    )
    const [round, setRound] = useState(0)
    const [winner, setWinner] = useState("")

    const restartButton = useRef()

    useEffect(() => {
        if (round > 0) {
            checkGameEnd()
            setPlayerTurn(playerTurn === "X" ? "O" : "X")
        }
    }, [round])

    useEffect(() => {
        if (!isPlayingGame) {
            restartButton.current.className += " display"
            restartButton.current.disabled = true
            setTimeout(() => {
                restartButton.current.className += " show"
                restartButton.current.disabled = false
            }, 2000)
        }
        else
            restartButton.current.className = "tic-tac-toe-ui-button"
    }, [isPlayingGame])

    function checkGameEnd() {
        for (let i = 0; i < 3; i++) {
            let isMatchHori = true
            let horiChar = gameState[i * 3]

            let isMatchVert = true
            let vertChar = gameState[i]

            for (let j = 0; j < 3; j++) {
                if (gameState[i * 3 + j] !== horiChar)
                    isMatchHori = false
                if (gameState[i + 3 * j] !== vertChar)
                    isMatchVert = false
            }

            if (isMatchHori && horiChar !== "")
                return determineWinner(horiChar)

            if (isMatchVert && vertChar !== "")
                return determineWinner(vertChar)
        }

        let isMatchDiag = true
        let diagChar = gameState[0]

        let isMatchAntiDiag = true
        let antiDiagChar = gameState[2]

        for (let i = 0; i < 3; i++) {
            if (gameState[4 * i] !== diagChar)
                isMatchDiag = false
            if (gameState[2 + 2 * i] !== antiDiagChar)
                isMatchAntiDiag = false
        }

        if (isMatchDiag && diagChar !== "") {
            return determineWinner(diagChar)
        }

        if (isMatchAntiDiag && antiDiagChar !== "") {
            return determineWinner(antiDiagChar)
        }

        if (!gameState.some(i => i === ""))
            return determineWinner("")
    }

    function determineWinner(winner) {
        setWinner(winner)
        setIsPlayingGame(false)
    }

    const placeSpot = (i) => {
        setGameState((prevState, index) => {
            const newState = [...prevState]
            newState[i] = playerTurn
            return newState
        })
        setRound(prevRound => prevRound+1)
    }

    const startGame = () => {
        setIsPlayingGame(true)
        setPlayerTurn("X")
        setGameState(["", "", "", "", "", "", "", "", ""])
        setWinner("")
        setRound(0)
    }

    const tiles = gameState.map((tile, index) => {
        if (tile === "" && isPlayingGame)
            return (
                <div
                    key={index}
                    onClick={() => placeSpot(index)}
                    className="tile">
                    <span className={`tile-text ${playerTurn} ${isPlayingGame ? "can-hover" : ""}`}>
                        {playerTurn}
                    </span>
                </div>)

        return (
            <div
                key={index}
                className="tile">
                <span className={`tile-text ${tile} is-done`}>
                    {tile}
                </span>
            </div>)
    })

    return (
        <div className="tic-tac-toe-container">
            <div className="tic-tac-toe">
                {tiles}
            </div>
            <div className="tic-tac-toe-ui">
                {
                    isPlayingGame ?
                        (<div className={playerTurn}>
                            Player {playerTurn} Turn
                        </div>) :
                        (<div className={`result ${winner}`}>
                            {winner === ""
                                ? "It's a tie."
                                : `${winner} is the winner!`
                            }
                        </div>)
                }
                <button 
                className="tic-tac-toe-ui-button" 
                onClick={startGame}
                ref={restartButton}>
                    Rematch!
                </button>
            </div>
        </div>
    )
}

export default TicTacToe