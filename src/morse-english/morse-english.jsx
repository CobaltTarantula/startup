import React from 'react';

export function Morse_English() {
  return (
    <main>      
      <h1>Decode!</h1>

      <div>
      <span>⏰</span>
      00:00
      </div>

      <br />

      <div id="quote" className="h-center">
        <div>.-- --- .-. -.. ... / .- .-. . / -.-. .... . .- .--. / ... .... --- .-- / -- . / - .... . / -.-. --- -.. .</div>
        <div>- Linus Torvalds</div>
      </div>

      <br />

      <div>
        <label for="count">Morse code to English:</label>
        <br />
        <input class="form-control form-control-lg" type="text" placeholder="English" aria-label=".form-control-lg example"></input>
      </div>
    </main>
  );
}