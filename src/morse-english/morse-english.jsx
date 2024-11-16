import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Morse_English(props) {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
  const [time, setTime] = React.useState(0); // Timer state in seconds
  const [morseCode, setMorseCode] = React.useState(''); // State to store the Morse code
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
        setMorseCode(translateToMorse(data.quote)); // Translate quote to Morse code
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

  const morseMap = {
    A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.',
    H: '....', I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.',
    O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-',
    V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..', ' ': ' / ',
    1: '.----', 2: '..---', 3: '...--', 4: '....-', 5: '.....', 
    6: '-....', 7: '--...', 8: '---..', 9: '----.', 0: '-----',
  };

  // Function to translate English text to Morse code
  const translateToMorse = (text) => {
    return text
      .toUpperCase()
      .split('')
      .map((char) => morseMap[char] || '') // Translate each character
      .join(' '); // Join with space between Morse code characters
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
      <h1>Decode!</h1>

      <div>
        <span>⏰</span>
        {formatTime(time)} {/* Display formatted time */}
      </div>

      <br />

      <p>...</p>

      <div className='h-center'>
        <div className='quote-box bg-light text-dark'>
          <p className='quote'>{morseCode}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
      </div>

      <br />

      <div className='h-center'>
        <label for="count">Morse code to English:</label>
        <br />
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="English"
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