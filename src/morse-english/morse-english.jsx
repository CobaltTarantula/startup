import React from 'react';
import { Link } from 'react-router-dom';

export function Morse_English(props) {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
  const [time, setTime] = React.useState(0); // Timer state in seconds
  const [morseCode, setMorseCode] = React.useState(''); // State to store the Morse code

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
        <input class="form-control form-control-lg" type="text" placeholder="English" aria-label=".form-control-lg example"></input>
        <br />
        <Link to="/game_over" className="btn btn-primary btn-sm">Submit</Link>
      </div>
    </main>
  );
}