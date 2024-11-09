import React from 'react';
import { Link } from 'react-router-dom';

export function Play() {
  return (
    <main>
      <br />

      <div>
        <Link to="/english-morse" className="btn btn-dark btn-lg">Code<br/>(English to Morse code)</Link>
      </div>

      <br />
      
      <div>
        <Link to="/morse-english" className="btn btn-outline-primary btn-lg">Decode<br/>(Morse code to English)</Link>
      </div>

      <br />

    </main>
  );
}