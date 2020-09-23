import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./header.css"
import hamburger_menu from '../images/hamburger_menu.png'
import arrow from '../images/arrow.png'

function Header() {
    const [isExpand, setIsExpand] = useState(false)

    const expandOnClick = () => {
        setIsExpand(prevState => !prevState)
    }

    const closeExpandOnClick = () => {
        setIsExpand(false)
    }

    return (
        <header className="header">
            <button
                className={"header-expand"}
                onClick={expandOnClick}
            >
                <img src={hamburger_menu} />
                Games
            </button>
            <div 
                onClick={closeExpandOnClick}
                className={`header-links ${isExpand ? " is-expand" : ""}`}>
                <Link to='/TicTacToe'><img src={arrow} /><span>Tic Tac Toe</span></Link>
                <Link to='/Connect4'><img src={arrow} /><span>Connect 4</span></Link>
                <Link to='/Checkers'><img src={arrow} /><span>Checkers</span></Link>
                <Link to='/Chess'><img src={arrow} /><span>Chess</span></Link>
            </div>
        </header>
    )
}

export default Header