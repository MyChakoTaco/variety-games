import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import TicTacToe from './pages/TicTacToe'
import Connect4 from './pages/Connect4'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Header />
        </div>
        <div className="App-body">
          <Switch>
            <Route exact path="/">Welcome to the games</Route>
            <Route path='/TicTacToe'>
              <div>
                <h1>Tic Tac Toe</h1>
                <TicTacToe />
              </div>
            </Route>
            <Route path='/Connect4'>
            <div>
                <h1>Connect 4</h1>
                <Connect4 />
              </div>
            </Route>
            <Route path='/Checkers'>Checkers</Route>
            <Route path='/Chess'>Chess</Route>
          </Switch>
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </Router>
    </div >
  );
}

export default App;
