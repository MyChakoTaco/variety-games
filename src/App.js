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
            <Route exact path="/">
              <h1>Welcome to the games!</h1>
            </Route>
            <Route path='/TicTacToe'>
              <div>
                <h1>Tic Tac Toe</h1>
                <TicTacToe />
              </div>
            </Route>
            <Route path='/Connect4'>
              <div>
                <h1>Connect 4</h1>
                <p>Sorry. I'm still developing this game!</p>
                {/* <Connect4 /> */}
              </div>
            </Route>
            <Route path='/Checkers'>
              <div>
                <h1>Checkers</h1>
                <p>Sorry. I'm still developing this game!</p>
              </div>
            </Route>
            <Route path='/Chess'>
              <div>
                <h1>Chess</h1>
                <p>Sorry. I'm still developing this game!</p>
              </div>
            </Route>
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
