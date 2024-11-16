import React from 'react';
import { Link } from 'react-router-dom';

export function Morse_English(props) {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
  const [time, setTime] = React.useState(0); // Timer state in seconds

  React.useEffect(() => {
    setQuote('.-- --- .-. -.. ... / .- .-. . / -.-. .... . .- .--. / ... .... --- .-- / -- . / - .... . / -.-. --- -.. .');
    setQuoteAuthor('Linus Torvalds');
    const timerInterval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timerInterval);
  }, []);

  // Format time in MM:SS
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };
  
  return (
    <main>      
      <h1>Decode!</h1>

      <div>
        <span>⏰</span>
        {formatTime(time)} {/* Display formatted time */}
      </div>

      <br />

      <p>...</p>

      <div className='h-center'>
        <div className='quote-box bg-light text-dark'>
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
      </div>

      <br />

      <div className='h-center'>
        <label for="count">Morse code to English:</label>
        <br />
        <input class="form-control form-control-lg" type="text" placeholder="English" aria-label=".form-control-lg example"></input>
        <br />
        <Link to="/game-over/game_over" className="btn btn-primary btn-sm">Submit</Link>
      </div>
    </main>
  );
}