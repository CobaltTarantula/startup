<!-- This content will not appear in the rendered Markdown 
# A first-level heading
## A second-level heading
### A third-level heading
**BOLD** __BOLD__
*italics* _italics_
~~strikethrough~
**_bolditalic_ bold**
***allbolditalic***
<sub> subscript </sub>
<sup> superscript </sup>
> And I quote.
`git status` quotes code using ticks

block code:
```
git status
git add
git commit
```
The background color is `#ffffff` for light mode and `#000000` for dark mode.
This site was built using [GitHub Pages](https://pages.github.com/).
can link to other sections and parts inside rendered file like in Notion.

![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)

can theme images

unordered lists
- George Washington
* John Adams
+ Thomas Jefferson
ordered lists
1. James Madison
2. James Monroe
3. John Quincy Adams
nested lists
1. First list item
   - First nested list item
     - Second nested list item
task lists
- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada: <- emoji
@ mentions people or teams

> [!NOTE]
> Hi
 
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

[^1]: My reference.
[^2]: To add line breaks within a footnote, prefix new lines with 2 spaces.
  This is a second line.
-->
# AWS information
* [instance](http://3.93.166.106)
* [instance_updated](https://morsedecoder.click)
* console ssh connect command = 
```
ssh -i ~/OneDrive/Desktop/byu24-25/CS_260/{KEY}.pem ubuntu@3.93.166.106
ssh -i ~/OneDrive/Desktop/byu24-25/CS_260/{KEY}.pem ubuntu@morsedecoder.click
```
# Startup Ideas
* ultimate rock paper scissors
* morse decoder
* Mom's recipe book
* Dad's album
# Domain
* Route 53
* morsedecoder.click
* empty name file type A
* "*" name file type A
# 9/12/2024
* Development environment: local computer used to edit site
  - VS code
  - Console
  - Git
  - Github
* Production environment: currently running site on the cloud
  - EC2
  - Caddy
  - AWS
  - HTTPS
  - Web services
    - MongoDB
  - Route 53
# 9/17/2024 Simon HTML
In order to clone and then deploy simon on my site ->
while in simon-html ->
```
git clone https://github.com/webprogramming260/simon-html.git
./deployFiles.sh -k ../{KEY}.pem -h morsedecoder.click -s simon
```
# 9/23/2024 CSS Intro
CSS takes HTML and makes it pretty and interactive.
- **rulesets:** rules
   - **selecter:** selects element to apply style rule to
   - **declarations:** represent the **property** to style with the given **property value**
```
p {
  font-family: sans-serif;
  font-size: 2em;
  color: navy;
  text-shadow: 3px 3px 1px #cccccc;
}
```
p = selector
<br />
font-family, font-size, color, text-shadow = declarations
## Associating CSS with HTML
1. use **style** element to explicitly assign >=1 declarations
2. use **style** element to define CSS rules within HTML doc (in head element of html)
3. use **link** element to connect to CSS file with the rules (in head element of html)
   - Generally the best
## Cascading Styles
When making declarations, the most "inside" a declaration is in the doc makes it the highest priority.
## Box model
1. Content (text/image)
   - By default, the width and height of an element is defined by the width and height of the content box. You can change the box-sizing CSS property from the default value of content-box to border-box in order to redefine the width and height to also include the padding and the border. This often makes it easier to style elements when their visual size matches their actual size.
2. Padding (background color)
3. Border (color, thickness, line style)
4. Margin (whitespace)

# CSS Selectors
## Element type selector
Makes all fonts of the body sans serif:
```
body {
  font-family: sans-serif;
}
```
Applies bottom border to heading and modifies element and background colors:
```
h1 {
  border-bottom: thin black solid;
}

section {
  background: #eeeeee;
  padding: 0.25em;
  margin-bottom: 0.5em;
}
```
## Combinators
changes color of second level heading within sections only (**descendant combinator**)
```
section h2 {
  color: #004400;
}
```
various combinators exist
## Class selector
Makes all elements of the specific paragraph of the summary class bold:
```
.summary {
  font-weight: bold;
}
```
Makes all elements of all paragrapsh of the summary class bold:
```
p.summary {
  font-weight: bold;
}
```
## ID selector
applies changes to specific element/element section
```
#physics {
  border-left: solid 1em purple;
}
```
## Attribute selector
select element with given attribute
```
p[class='summary'] {
  color: red;
}
```
## Pseudo selector
Depending on mouse position etc... select
```
section:hover {
  border-left: solid 1em purple;
}
```
# CSS Declarations
[Table](https://learn.cs260.click/page/css/declarations/declarations_md) of declarations and other stuff
# 9/23/24 CSS Fonts
## Font Families
**font-family:** defines what fonts should be used
1. Serif
   - extra strokes
2. sans-serif
   - no extra strokes
3. fixed
   - all chars same size
4. symbol
   - non language chars
## Importing fonts
**@font-face:** loads an outside sourced font
<br />
Example of grabbing font from local server:
```
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.ttf');
}

p {
  font-family: Quicksand;
}
```
Example of outsourcing fonts:
```
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```
# CSS Animation
__animation:__ various properties to be edited in the animation
<br />
**keyframes:** snapshots at key points
<br />
Example:
```
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}
@keyframes demo {
  from {
    font-size: 0vh;
  }

  95% {
    font-size: 21vh;
  }

  to {
    font-size: 20vh;
  }
}
```
# 9/24/24 Response Grid CSS Code
```
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}
```
# 9/30/24 Debugging CSS
use inspect after the launch live funciton in vscode to check on html and css debugging.
<br />
example: index.html and index.css in my debugging_css folder
# 9/30/20 Simon CSS
cloned it then deployed it
**MAKE SURE TO DEPLOY IN GITBASH INSIDE DIRECTORY TO DEPLOY**
```
git clone https://github.com/webprogramming260/simon-css.git
./deployFiles.sh -k ../{KEY}.pem -h morsedecoder.click -s simon
```
# JavaScript
## 10/8/24 Scope
JavaScript has four different types of scope:
1. _Global_ - Visible to all code
2. _Module_ - Visible to all code running in a module
3. _Function_ - Visible within a function
4. _Block_ - Visible within a block of code delimited by curly braces
<br />
- **Var** - variable declaration that is logically hoisted to top of function (doesn't update properly)
- **This** -  depending on context references different things
   1. _Global_ - When this is referenced outside a function or object it refers to the globalThis object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser's window object.
   2. _Function_ - When this is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running in JavaScript strict mode, a global function's this variable is undefined instead of globalThis.
   3. _Object_ - When this is referenced in an object it refers to the object.
- **Closure** - A closure is defined as a function and its surrounding state. That means whatever variables are accessible when a function is created are available inside that function. This holds true even if you pass the function outside of the scope of its original creation.

## Modules
- Examples
   - Node.js (CommonJS modules)
   - ES6
   - JavaScript (ES modules) _we gonna use this one_
- you must explicitly export the objects from one file and then import them into another file
- When doing html only module can access module

## DOM
- global variable **document** points to root element of DOM
- everything in HTML doc is node in DOM
- there's a bunch more, but i cannot focus so imma read it when i do the assignment

## Local Storage
| Function | Meaning |
| -------- | ------- |
| setItem(name, value) | Sets a named item's value into local storage |
| getItem(name) | Gets a named item's value from local storage |
| removeItem(name) | Removes a named item from local storage |
| clear() | Clears all items in local storage |
- A local storage value must be of type string, number, or boolean. If you want to store a JavaScript object or array, then you must first convert it to a JSON string with JSON.stringify() on insertion, and parse it back to JavaScript with JSON.parse() when retrieved.

## 10/14/24 Promises
- for long running or blocking tasks
- Steps
   1. **pending** - Currently running asynchronously
   2. **fulfilled** - Completed successfully
   3. **rejected** - Failed to complete
- calling resolve returns either fulfilled or rejected after pending
- then, catch, finally

## Async/await
```
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```
async:
```
async function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: Promise {<fulfilled>: 'moo'}
```
await
```
console.log(cow());
// OUTPUT: Promise {<pending>}

console.log(await cow());
// OUTPUT: moo
```
- With async/await, you can clarify the code intent by hiding the promise syntax, and also make the execution block until the promise is resolved.

## 10/8/24 (In class lecture) JavaScript
- Primary use for JavaScript
   - Manipulating the DOM
   - Functionality
- Can be in attr in html, script elem, or link to file

## 10/16/24 Debugging JavaScript
- use console.log like a print debug
- browser --> inspect --> sources

## Node.js
- runtime for JS on the server side
- If you are using Windows, then follow the installation instructions from the windows-nvm repository. Click on latest installer and then scroll down to the Assets and download and execute nvm-setup.exe. Once the installation is complete, you will need to open a new console window so that it gets the updated path that includes NVM.
```
➜ nvm install lts
➜ nvm use lts
```
- check installation
```
➜ node -v
v20.10.0
```
- can execute line of JS with ```-e``` parameter
- execute file by passing to node (``` node filename.js ```)
- or just run ```node``` then type code directly in interpreter
- Main steps
   1. Create your project directory
   2. Initialize it for use with NPM by running npm init -y
   3. Make sure .gitignore file contains node_modules
   4. Install any desired packages with npm install <package name here>
   5. Add require('<package name here>') to your application's JavaScript
   6. Use the code the package provides in your JavaScript
   7. Run your code with node index.js

# 10/17/24 Lecture
- a bunch of stuff already in back end chief
## Modules
- Ex:
   - alert.js
   - main.js
- grab data from each other (different js files) by ```export function()``` in alert.js and ```import {function()} from './alert.js'``` in main.js
## Packages
- gotta run NVM to install Node which automatically installs NPM
   - lets you run JS outside of browser
   - _allows for importing JS packages from outside_
     - be careful tho
- don't need to push to github, NPM can do that for you
- ```require('package')``` inside .js to import from package

# 10/21/24 Web frameworks
- **Vue:** combines HTML, CSS, and JS in one file
- **Svelt:** does the same as Vue but requires a transpiler to generate browser-ready code, instead of a runtime virtual DOM
- **React:** combines HTML and JS
- **Angular component:** defines what JavaScript, HTML, and CSS are combined together. This keeps a fairly strong separation of files that are usually grouped together in a directory rather than using the single file representation. 
## React
- abstracts HTML into a JS variant **JSX**
- **Babel:** preprocessor/transpiler that converts JSX into valid HTML and JS formats
- The React.createElement function will then generate DOM elements and monitor the data they represent for changes. When a change is discovered, React will trigger dependent changes.
### Hooks
- allow React function style components to be able to do everything that a class style component can do and more
- useState and useEffect
   - useEffect ex for running a function every time the component completes rendering
```
function UseEffectHookDemo() {
  React.useEffect(() => {
    console.log('rendered');
  });

  return <div>useEffectExample</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```
- can specify dependencies
# 10/22/24 React: Components, Reactivity, Hooks, Router
- **web framework:**
   - simplify common patterns
   - provide common components
   - improve performance
   - increase device coverage
- React combines HTML and CSS through **JSX**
- to make it faster, makes virtual copy of DOM to change
   - makes updates faster to run
   - moniters changes in the state and to components
- React is **component** based as opposed to page based
- [component example](https://codepen.io/CobaltTarantula/pen/PoMJORO)
- also check forked CodePens
# 10/24/24 React: Router, Simon, Toolchain
- navigation based components
- **Router:** way to functionalize nav
- **Toolchain:**
   - npm run build (slow debug version instead of live deploy)
   - vite build (Babel, transpile, bundle, polyfill, etc...)
   - compress
   - /public/index.html
