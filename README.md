# Morse Decoder
[Notes page](notes.md)
## Elevator pitch
Have you ever wished you knew another language? Do you sometimes wish to hide your darkest secrets in cryptic messages for the unlearned to scratch their heads at? Morse Decoder give you the opportunity to brush up on your skills in Morse code. You will have the opportunity to both codify and decodify messages in Morse code. As you practice more and more, see your speed/score get better and better! Become one of the top players and become a Morse code master!
## Design
![decoderfront](decoder1.JPG)
![decoderback](decoder2.JPG)
## Key Features
* Secure login over HTTPS
* Ability to choose between translating to or from Morse code
* Morse code key page available to consult
* Top scores recorded and displayed
* Top players recorded and displayed
## Technologies
* HTML - Login page, Morse Code Key page, Game menu, Game page 1 (English to Morse), Game page 2 (Morse to English), scoring page.
* CSS - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast. Little animation for scoring page. Sounds coordinated to morse letters to match the rhythm.
* JavaScript - Allows for navigation of different pages, login functionality, and recognizes user input to compare to translation.
* React - Provided login, display high scores of other users, and routing and components.
* Service - Backend service with endpoints for:
  - login
  - retrieving high scores
  - displaying top players
  - obtaining quotes or sentences from other API to translate
* DB/Login
  - Store users, scores, and top players in database. Register and login users. Credentials securely stored in database. Can't play unless authenticated.
* WebSocket
  - As players score their deecoding/coding, the top players and their scores are broadcasted to other users.
### HTML
- [x] **HTML pages**
  * Home page with login
  * Play page with two options of which version to play
  * English-Morse game page
  * Morse-English game page
  * Game over page
  * High Scores page
  * Morse code key page
- [x] **Links** - Links on top of screen go to each page. Once CSS is implemented, buttons will have functionality to link between pages as well.
- [x] **Text** - The game over screen displays text along with the scores to describe them.
- [x] **Images** - On the key page, the image of the morse code key is displayed.
- [x] **3rd Party calls** - The quote or phrase to be translated on both versions of the game page will be randomly generated from a 3rd party. 
- [x] **DB/Login** - Input box and submit button for login. The player high scores, and personal high scores represent data pulled from the database.
- [x] **WebSocket** - On the game page, realtime scores are displayed.
### CSS
- [x] Header, footer, and main body content
- [x]  Navigation elements - I have a functional navbar that accesses all pages, will change so that game over screen along with different game modes only accessible through buttons or ending the game. same with score page.
- [x]  Responsive to window resizing - My app should look great on all window sizes and devices
- [x]  Application elements - Used good contrast and whitespace
- [x]  Application text content - Consistent fonts
- [x]  Application images - my image is centered on screen above the table on the key page
### React
### Service
### DB/Login
### WebSocket
