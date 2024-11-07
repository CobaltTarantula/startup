import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './app.css';

export default function App() {
  return (
    <div className='body bg-dark text-light'>
      <header className='container-fluid'>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">MorseDecoder</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Play
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="play.html">Play</a></li>
                    <li><a className="dropdown-item" href="english-morse.html">English to Morse</a></li>
                    <li><a className="dropdown-item" href="morse-english.html">Morse to English</a></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><a className="dropdown-item" href="game_over.html">Game Over</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="scores.html">Scores</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="key.html">Key</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>App components go here</main>

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
  );
}