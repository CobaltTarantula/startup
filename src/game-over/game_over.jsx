import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export function Game_Over() {
  const location = useLocation();
  const { lettersWritten = '--', timeTaken = '--', score = '--' } = location.state || {};
  
  // useEffect(() => {
  //   // Replace with the appropriate API endpoint and data format
  //   fetch('/api/scores', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       name: 'Anonymous', // Replace with actual user name if available
  //       score: score,
  //       date: new Date().toISOString(),
  //     }),
  //   }).catch((error) => {
  //     console.error('Error updating score:', error);
  //   });
  // }, [score]);

  return (
    <main>
      <div className="h-center">
        <h1>Game Over</h1>
        <br />
        You wrote
        <input type="text" id="letters" value={lettersWritten} readOnly />
        letters in
        <input type="text" id="seconds" value={timeTaken} readOnly />
        seconds.
        <br />
        <br />
        Your score is 
        <input type="text" id="score" value={score} readOnly />
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