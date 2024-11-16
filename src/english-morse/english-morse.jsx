import React from 'react';
import { Link } from 'react-router-dom';

export function English_Morse(props) {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
  const [time, setTime] = React.useState(0); // Timer state in seconds

  React.useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    fetch('https://quote.cs260.click')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setQuoteAuthor(data.author);
      })
      .catch();

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
      <h1>Code!</h1>

      <div>
        <span>⏰</span>
        {formatTime(time)} {/* Display formatted time */}
      </div>

      <br />

      <p>...</p>

      <div className='quote-box bg-light text-dark'>
        <p className='quote'>{quote}</p>
        <p className='author'>{quoteAuthor}</p>
      </div>

      <br />

      <div className='h-center'>
        <label for="count">English to Morse code:</label>
        <br />
        <input className="form-control form-control-lg" type="text" placeholder="--/---/.-./.../." aria-label=".form-control-lg example"/>
        <br />
        <Link to="/game_over" className="btn btn-primary btn-sm">Submit</Link>
      </div>
    </main>
  );
}