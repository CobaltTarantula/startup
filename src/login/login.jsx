import React from 'react';

// export function Login() {
//   return (
//     <main>
//       <h1 className="h-center">Welcome to Morse Decoder</h1>
//       <form method="get" action="play.html">
//         <div>
//           <span>@</span>
//           <input id="email" type="text" placeholder="your@email.com" />
//         </div>
//         <div>
//           <span>🔒</span>
//           <input id="password" type="password" placeholder="password" />
//         </div>
//         <div>
//           <button type="button" className="btn btn-primary btn-sm">Login</button>
//           <button type="button" className="btn btn-primary btn-sm">Create</button>
//         </div>
//       </form>
//     </main>
//   );
// }

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        {authState !== AuthState.Unknown && <h1>Welcome to Simon</h1>}
        {authState === AuthState.Authenticated && <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}