import React from 'react';

export function Key() {
  return (
    <main>
      <div id="picture" className="picture-box"><img width="400px" src="https://upload.wikimedia.org/wikipedia/commons/b/b5/International_Morse_Code.svg" alt="random" /></div>

      <table className="table table-sm table-bordered" border = "1">
        <tr>
          <td> / </td>
          <td> space between letters </td>
        </tr>
        <tr>
          <td> // </td>
          <td> space between words </td>
        </tr>
      </table>

    </main>
  );
}