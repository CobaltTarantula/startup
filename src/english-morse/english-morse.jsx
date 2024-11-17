import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function English_Morse(props) {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
  const [time, setTime] = React.useState(0); // Timer state in seconds
  const [userInput, setUserInput] = React.useState(''); // User's English input

  const navigate = useNavigate();

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

  // Function to handle form submission
  const handleSubmit = () => {
    const lettersWritten = userInput.length; // Count the letters written by the user
    const timeTaken = time; // Current timer value
    const score = (lettersWritten / timeTaken).toFixed(2); // Calculate score as letters per second

    // Navigate to the Game Over screen with the calculated values
    navigate('/game_over', {
      state: { lettersWritten, timeTaken, score },
    });
  };

  return (
    <main>
      <h1>Code!</h1>

      <div>
        <span>⏰</span>
        {formatTime(time)} {/* Display formatted time */}
      </div>

      <br />

      <div className='quote-box bg-light text-dark'>
        <p className='quote'>{quote}</p>
        <p className='author'>{quoteAuthor}</p>
      </div>

      <br />

      <div className='h-center'>
        English to Morse code:
        <br />
        <input 
          id="english-morse-input"
          className="form-control form-control-lg" 
          type="text" 
          placeholder="--/---/.-./.../." 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)} // Update userInput on change
          aria-label=".form-control-lg example"
        />
        <br />
        <button onClick={handleSubmit} className="btn btn-primary btn-sm">Submit</button>
      </div>
    </main>
  );
}