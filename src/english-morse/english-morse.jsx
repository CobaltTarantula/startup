import React from 'react';

export function English_Morse() {
  return (
    <main>
      <h1>Code!</h1>

      <div>
      <span>⏰</span>
      00:00
      </div>

      <br />

      <div id="quote" className="h-center">
        <div>Words are cheap. Show me the code.</div>
        <div>- Linus Torvalds</div>
      </div>

      <br />

      <div>
        <label for="count">English to Morse code:</label>
        <br />
        <input className="form-control form-control-lg" type="text" placeholder="--/---/.-./.../." aria-label=".form-control-lg example"/>
      </div>
    </main>
  );
}