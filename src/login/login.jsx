import React from 'react';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange}) {
  return (
    <main>
      <div>
        <h1 className="h-center">Welcome to Morse Decoder</h1>
          {authState === AuthState.Authenticated ? (
            <Authenticated 
              userName={userName} 
              onLogout={() => {
                localStorage.removeItem('userName');
                onAuthChange(null, AuthState.Unauthenticated);
              }} 
            />
          ) : (
            <Unauthenticated
              userName={userName}
              onLogin={(loginUserName) => {
                onAuthChange(loginUserName, AuthState.Authenticated);
                console.log('Auth state changed:', authState);
              }}
            />
          )}
      </div>
    </main>
  );
}