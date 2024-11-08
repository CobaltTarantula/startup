import React from 'react';

export function Morse_English(props) {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  React.useEffect(() => {
    setQuote('.-- --- .-. -.. ... / .- .-. . / -.-. .... . .- .--. / ... .... --- .-- / -- . / - .... . / -.-. --- -.. .');
    setQuoteAuthor('Linus Torvalds');
  }, []);
  return (
    <main>      
      <h1>Decode!</h1>

      <div>
      <span>⏰</span>
      00:00
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
      </div>
    </main>
  );
}