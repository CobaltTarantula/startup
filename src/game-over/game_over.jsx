import React from 'react';
import { Link } from 'react-router-dom';

export function Game_Over() {
  return (
    <main>
      <div className="h-center">
        <h1>Game Over</h1>
        <br />
        <label for="count"></label>
        You wrote
        <input type="text" id="letters" value="--" readonly />
        letters in
        <input type="text" id="seconds" value="--" readonly />
        seconds.
        <br />
        <br />
        Your score is 
        <input type="text" id="score" value="--" readonly />
        l/s.
      </div>

      <br />

      <div className = "h-center">
        <Link to="/play" className="btn btn-outline-primary">Menu</Link>
      </div>

      <br />
    </main>
  );
}