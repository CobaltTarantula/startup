import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './gamemode/gamemode';
import { Scores } from './scores/scores';
import { Key } from './key/key';
import { Morse_English } from './morse-english/morse-english';
import { English_Morse } from './english-morse/english-morse';
import { Game_Over } from './game-over/game_over';
import { Nav } from 'react-bootstrap';

const AuthState = {
  Authenticated: 'Authenticated',
  Unauthenticated: 'Unauthenticated',
};

export default function App() {
  const [authState, setAuthState] = useState(() => {
    return localStorage.getItem('authState') || AuthState.Unauthenticated;
  });
  const [userName, setUserName] = useState(() => localStorage.getItem('userName') || '');
  useEffect(() => {
    localStorage.setItem('authState', authState);
    if (authState === AuthState.Authenticated) {
      localStorage.setItem('userName', userName);
    } else {
      localStorage.removeItem('userName');
    }
  }, [authState, userName]);
  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">MorseDecoder</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    {authState === AuthState.Authenticated && (
                      <NavLink className="nav-link dropdown-toggle" to="/gamemode" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Play
                      </NavLink>
                    )}
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      {authState === AuthState.Authenticated && (
                        <li><NavLink className="dropdown-item" to="/english-morse">English to Morse</NavLink></li>
                      )}
                      {authState === AuthState.Authenticated && (  
                        <li><NavLink className="dropdown-item" to="/morse-english">Morse to English</NavLink></li>
                      )}
                      {authState === AuthState.Authenticated && (  
                        <li><hr className="dropdown-divider"></hr></li>
                      )}
                      {authState === AuthState.Authenticated && (  
                        <li><NavLink className="dropdown-item" to="/game_over">Game Over</NavLink></li>
                      )}
                    </ul>
                  </li>
                  <li className="nav-item">
                    {authState === AuthState.Authenticated && (
                      <NavLink className="nav-link" to="/scores">Scores</NavLink>
                    )}
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/key">Key</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path='/english-morse' element={<English_Morse />} />
          <Route path='/game_over' element={<Game_Over />} />
          <Route path='/morse-english' element={<Morse_English />} />
          <Route path='/play' element={<Play />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/key' element={<Key />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Zack Clifford</span>
            <br />
            <a className='text-reset' href='https://github.com/CobaltTarantula/startup.git'>
              Github
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}