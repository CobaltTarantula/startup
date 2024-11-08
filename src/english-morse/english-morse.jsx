import React from 'react';

export function English_Morse(props) {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  React.useEffect(() => {
    setQuote('Show me the code');
    setQuoteAuthor('Linus Torvalds');
  }, []);
  return (
    <main>
      <h1>Code!</h1>

      <div>
      <span>⏰</span>
      00:00
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
      </div>
    </main>
  );
}