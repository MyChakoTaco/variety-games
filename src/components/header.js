import React from "react"
import {Link} from "react-router-dom"
import "./header.css"

function Header() {
    return (
        <header className="header">
            <Link to='/TicTacToe'><span>Tic Tac Toe</span></Link>
            <Link to='/Connect4'><span>Connect 4</span></Link>
            <Link to='/Checkers'><span>Checkers</span></Link>
            <Link to='/Chess'><span>Chess</span></Link> 
        </header>
    )
}

export default Header