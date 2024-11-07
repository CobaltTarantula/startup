import React from 'react';

export function Login() {
  return (
    <main>
      <h1 className="h-center">Welcome to Morse Decoder</h1>
      <form method="get" action="play.html">
        <div>
          <span>@</span>
          <input id="email" type="text" placeholder="your@email.com" />
        </div>
        <div>
          <span>🔒</span>
          <input id="password" type="password" placeholder="password" />
        </div>
        <div>
          <button type="button" className="btn btn-primary btn-sm">Login</button>
          <button type="button" className="btn btn-primary btn-sm">Create</button>
        </div>
      </form>
    </main>
  );
}