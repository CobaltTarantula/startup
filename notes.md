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
# 10/29/24 Simon React
- once P1 is done:
```
npm install
npm run dev
o
```
<- this will run the first part in your browser
- vim bindings can help with find and replace, and complex text editing
- authState to authenticate
# Internet
- **internet:** connection between computers
- in order for interdevice communication, an **IP address** is necessary
   - generally a bunch of numbers
- people like using **domain names** to represent IP addresses
   - something.com
```
dig byu.edu
```
- ```dig``` generates the IP address of a domain name
- by using ```traceroute``` can find the hops in connection

TCP/ICP layers of sending data:
| Layer       | Example          | Purpose                               |
| ----------- | ---------------- | ------------------------------------- |
| Application | HTTPS            | Functionality like web browsing       |
| Transport   | TCP              | Moving connection information packets |
| Internet    | IP               | Establishing connections              |
| Link        | Fiber, hardware  | Physical connections                  |

# Web Servers
- **Web server:** computing device that is hosting a web service that knows how to accept incoming internet connections and speak the HTTP application protocol.
- **Monolithic servers:** package of server and software, big and clunky, olden days
- now we use **libraries** which help make connections
- now it is SO easy to build web services (using **go** can be helpful)
- we gonna use **Caddy**
- **microservice:** web service that provides a single function
- **serverless:** writing functions that speak HTTP directly and don't need servers

# Domain Names
- **domain name registry:** storage of all domain names
- [subdomain.]*secondary.top = ```simon.morsedecoder.click```
- if you own the **root domain** (secondary) then you can make as many subdomains as desired
- ```whois``` to find subdomains
- **DNS:** domain name system
- **A record:** address, direct mapping of domain to IP
- **CNAME:** canonical name record, maps domains to domains
- **authoritative name servers:** every DNS server refs these to associate domain with IP
- can get domains at varying prices, the most unused are the cheapest

# Web services introduction
- **frontend:** html and css references in the browser
- **backend:** functionality provided by web service
   - can also use ```fetch``` to make requests of other web services
- **endpoints:** (sometimes APIs) functions provided by web service

# URL
- **URL:** uniform resource locater, represents the location of a web resource
- **web resource:** can be anything, such as a web page, font, image, video stream, database record, or JSON object. It can also be completely ephemeral, such as a visitation counter, or gaming session.
- URL syntax: ```<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>```

| Part        | Example                                | Meaning                                                                                                                                                                                                                                                                          |
|-------------|----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Scheme      | https                                  | The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.                                                                                                                        |
| Domain name | byu.edu                                | The domain name that owns the resource represented by the URL.                                                                                                                                                                                                                   |
| Port        | 3000                                   | The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.  |
| Path        | /school/byu/user/8014                  | The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.                                               |
| Parameters  | filter=names&highlight=intro,summary   | The parameters represent a list of key-value pairs. Usually, it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string. |
| Anchor      | summary                                | The anchor usually represents a sub-location in the resource. For HTML pages, this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash or fragment ID.                    |

- **URN:** uniform resource name, unique resource name that does not specify location information
- **URI:** unifrom resource identifier, a general resource identifier that could refer to either a URL or a URN
- Generally not talking about URIs, but URLs

# Ports
- necessary to have both an IP address and numbered port to connect to internet
- Ports from 0 to 1023 represent standard protocols.
- Ports from 1024 to 49151 represent ports that have been assigned to requesting entities.
- Ports from 49152 to 65535 are considered dynamic and are used to create dynamic connections to a device.

| Port | Protocol |
| ---- | -------- |
| 20 | File Transfer Protocol (FTP) for data transfer |
| 22 | Secure Shell (SSH) for connecting to remote devices |
| 25 | Simple Mail Transfer Protocol (SMTP) for sending email |
| 53 | Domain Name System (DNS) for looking up IP addresses |
| 80 | Hypertext Transfer Protocol (HTTP) for web requests |
| 110 | Post Office Protocol (POP3) for retrieving email |
| 123 | Network Time Protocol (NTP) for managing time |
| 161 | Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers |
| 194 | Internet Relay Chat (IRC) for chatting |
| 443 | HTTP Secure (HTTPS) for secure web requests |

- When you built your web server you externally exposed port 22 so that you could use SSH to open a remote console on the server, port 443 for secure HTTP communication, and port 80 for unsecure HTTP communication.
- Caddy is listening on ports 80 and 443

# HTTP
- **HTTP:** Hypertext Transfer Protocol, how the web talks
- conversation between web client and web server is through HTTP
- to see HTTP exchange... ```curl -v -s http://info.cern.ch/hypertext/WWW/Helping.html```
- first line of HTTP request contains the **verb** of the request

| Verb    | Meaning                                                                                                                                                                                                                                                   |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GET     | Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.                                                                                                                          |
| POST    | Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.                                                                                                              |
| PUT     | Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource.  |
| DELETE  | Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.                                                                                                                                                |
| OPTIONS | Get metadata about a resource. Usually, only HTTP headers are returned. The resource itself is not returned.                                                                                                                                               |
| Code | Text                  | Meaning                                                                                                                   |
|------|-----------------------|---------------------------------------------------------------------------------------------------------------------------|
| 100  | Continue              | The service is working on the request                                                                                     |
| 200  | Success               | The requested resource was found and returned as appropriate.                                                             |
| 201  | Created               | The request was successful and a new resource was created.                                                                |
| 204  | No Content            | The request was successful but no resource is returned.                                                                  |
| 304  | Not Modified          | The cached version of the resource is still valid.                                                                        |
| 307  | Permanent Redirect    | The resource is no longer at the requested location. The new location is specified in the response location header.       |
| 308  | Temporary Redirect    | The resource is temporarily located at a different location. The temporary location is specified in the response location header. |
| 400  | Bad Request           | The request was malformed or invalid.                                                                                     |
| 401  | Unauthorized          | The request did not provide a valid authentication token.                                                                |
| 403  | Forbidden             | The provided authentication token is not authorized for the resource.                                                    |
| 404  | Not Found             | An unknown resource was requested.                                                                                        |
| 408  | Request Timeout       | The request takes too long.                                                                                               |
| 409  | Conflict              | The provided resource represents an out-of-date version of the resource.                                                 |
| 418  | I'm a Teapot          | The service refuses to brew coffee in a teapot.                                                                           |
| 429  | Too Many Requests     | The client is making too many requests in too short of a time period.                                                     |
| 500  | Internal Server Error | The server failed to properly process the request.                                                                        |
| 503  | Service Unavailable   | The server is temporarily down. The client should try again with an exponential back off.                                 |

| Header                       | Example                                 | Meaning                                                                                                            |
|------------------------------|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| Authorization                | Bearer bGciOiJIUzI1NiIsI                | A token that authorizes the user making the request.                                                              |
| Accept                       | image/*                                 | The format the client accepts. This may include wildcards.                                                        |
| Content-Type                 | text/html; charset=utf-8                | The format of the content being sent. These are described using standard MIME types.                              |
| Cookie                       | SessionID=39s8cgj34; csrftoken=9dck2    | Key-value pairs that are generated by the server and stored on the client.                                        |
| Host                         | info.cern.ch                            | The domain name of the server. This is required in all requests.                                                  |
| Origin                       | cs260.click                             | Identifies the origin that caused the request. A host may only allow requests from specific origins.              |
| Access-Control-Allow-Origin  | https://cs260.click                     | Server response indicating which origins can make a request. This may include a wildcard.                         |
| Content-Length               | 368                                     | The number of bytes contained in the response.                                                                    |
| Cache-Control                | public, max-age=604800                  | Tells the client how it can cache the response.                                                                   |
| User-Agent                   | Mozilla/5.0 (Macintosh)                 | The client application making the request.                                                                        |
# 10/31/24 Intro to backend
- **backend:** code that runs on the server as opposed to the computer
- "10." IP addresses are only for local work
- 128.187.x.x adresses owned by BYU
1. Physical AKA MAC Address
   - Wifi Cell
   - Ethernet
2. Internet (through DHCP)
   - IPV6
   - IPV4
- "if you're living in Africa, most of your traffic is going through a satellite"
- bro has no idea what we need to learn today
   - he's a substitute
- introduced real life application of web development
   - familysearch+
- don't pay money for APIs
   - there are many for free
  
# 11/4/24 Node Web Service
- JS code to listen -> Web service
```
mkdir webservicetest
cd webservicetest
npm init -y
```
- then paste the following code in index.js in vsCode
```
const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Hello Node.js! [${req.method}] ${req.url}</h1>`);
  res.end();
});

server.listen(8080, () => {
  console.log(`Web service listening on port 8080`);
});
```
- then if you run ```node index.js``` it should work
## Debugging
- replace main.js code with:
```
const express = require('express');
const app = express();

app.get('/*', (req, res) => {
  res.send({ url: req.originalUrl });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```
- and a buncha other things

# SOP & CORS
- **same origin policy:** SOP, JS only can make requests to domain user is currently viewing
- **cross origin resource sharing:** client specify origins of a request, server responds with legal origins
- make sure to test any web services used so that they aren't blocked by the previous terms

# 11/5/24 Service Design
## Model and Sequence Diagrams
- gotta define the primary objects a user would recoginize/interact with during use
- can use sequence diagram to help clarify model and endpoints(?)
## Leveraging HTTP
- HTTP has a lot of the functionality of stuff we might want in our service, so let's use that
   - GET, POST, PUT, DELETE]
## Endpoints
- **endpoints:**
   - AKA: **API** calls available through url
   - multiple in a web service
   - each provides an individual service
   - functions defined in Express
- when designing endpoints, gotta make 'em:
   - **Grammatical:** everything is a **resource** (noun/object) which you act on with an HTTP verb 
   - **Readable:** The resource you are referencing with an HTTP request should be clearly readable in the URL path.
   - **Discoverable:** endpoints can expose aggregate endpoints (trees)
   - **Compatible:** When you build your endpoints you want to make it so that you can add new functionality without breaking existing clients. Usually this means that the clients of your service endpoints should ignore anything that they don't understand.
   - **Simple:** They should not focus on the data structure or devices used to host the resources. There should only be one way to act on a resource. Endpoints should only do one thing.
   - **Documented:** [do it](https://spec.openapis.org/oas/latest.html)
## RPC
- **RPC:** remote procedure calls -> expose service endpoints as simple function calls.
## REST
- **REST:** Representational State Transfer -> attempts to take advantage of the foundational principles of HTTP
## GraphQL
- GraphQL focuses on the manipulation of data instead of a function call (RPC) or a resource (REST).
- a query that specifies the desired data and how it should be joined and filtered

# Simon Service
- steps to setup [simon service](https://learn.cs260.click/page/simon/simonService/simonService_md)
# PM2
- to keep programs running even after closing a console, gotta register it as a **daemon**
- should be automatically setup?

# 11/7/24 Web Services: Simon Service, Endpoint Design, PM2
- **middleware:** functions that run as you get requests but before sending a response
- **Express:** node package for doing middleware
- cookies exist
- index.js endpoints in simon-React

# 11/11/24 Development and production environments
- **development environment:** my comp
   - where to experiment
- **production environment:** aws server
   - don't shell in and experiment here you fool
- **CI:** continous integration, method of deployment
## Automating your deployment
- The advantage of using an automated deployment process is that it is reproducible
- ```./deployService.sh -k ~/prod.pem -h yourdomain.click -s simon```
   - The -k parameter provides the credential file necessary to access your production environment.
   - The -h parameter is the domain name of your production environment.
   - The -s parameter represents the name of the application you are deploying (either simon or startup).
- Parts:
   - The first part of the script simply parses the command line parameters so that we can pass in the production environment's security key (or PEM key), the hostname of your domain, and the name of the service you are deploying.
```
while getopts k:h:s: flag
do
    case "${flag}" in
        k) key=${OPTARG};;
        h) hostname=${OPTARG};;
        s) service=${OPTARG};;
    esac
done

if [[ -z "$key" || -z "$hostname" || -z "$service" ]]; then
    printf "\nMissing required parameter.\n"
    printf "  syntax: deployService.sh -k <pem key file> -h <hostname> -s <service>\n\n"
    exit 1
fi

printf "\n----> Deploying $service to $hostname with $key\n"
```
   - Next the script copies all of the applicable source files into a distribution directory (dist) in preparation for copying that directory to your production server.
```
# Step 1
printf "\n----> Build the distribution package\n"
rm -rf dist
mkdir dist
cp -r application dist
cp *.js dist
cp package* dist
```
   - The target directory on your production environment is deleted so that the new one can replace it. This is done by executing commands remotely using the secure shell program (ssh).
```
# Step 2
printf "\n----> Clearing out previous distribution on the target\n"
ssh -i $key ubuntu@$hostname << ENDSSH
rm -rf services/${service}
mkdir -p services/${service}
ENDSSH
```
   - The distribution directory is then copied to the production environment using the secure copy program (scp).
```
# Step 3
printf "\n----> Copy the distribution package to the target\n"
scp -r -i $key dist/* ubuntu@$hostname:services/$service
```
   -  We then use ssh again to execute some commands on the production environment. This installs the node packages with npm install and restarts the service daemon (PM2) that runs our web application in the production environment.
```
# Step 4
printf "\n----> Deploy the service on the target\n"
ssh -i $key ubuntu@$hostname << ENDSSH
cd services/${service}
npm install
pm2 restart ${service}
ENDSSH
```
   - Finally we clean up our development environment by deleting the distribution package.
```
# Step 5
printf "\n----> Removing local copy of the distribution package\n"
rm -rf dist
```
# Uploading Files
- frontend + backend -> epic
## Backend
- storage support is in the backend
- ```npm install multer```
```
const express = require('express');
const multer = require('multer');

const app = express();

app.use(express.static('public'));

const upload = multer({
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      const filetype = file.originalname.split('.').pop();
      const id = Math.round(Math.random() * 1e9);
      const filename = `${id}.${filetype}`;
      cb(null, filename);
    },
  }),
  limits: { fileSize: 64000 },
});

app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res.send({
      message: 'Uploaded succeeded',
      file: req.file.filename,
    });
  } else {
    res.status(400).send({ message: 'Upload failed' });
  }
});

app.get('/file/:filename', (req, res) => {
  res.sendFile(__dirname + `/uploads/${req.params.filename}`);
});

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(413).send({ message: err.message });
  } else {
    res.status(500).send({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
# Storage Service
- don't store files directly in server
- AWS S3
   1. It has unlimited capacity
   2. You only pay for the storage that you use
   3. It is optimized for global access
   4. It keeps multiple redundant copies of every file
   5. You can version the files
   6. It is performant
   7. It supports metadata tags
   8. You can make your files publicly available directly from S3
   9. You can keep your files private and only accessible to your application
- do not include your credentials in your code

# 11/12/24 Authorization Services
- store authentication information on a user's device using a **cookie** or other object
- **authorization:** depending on roles, has access to certain functions, page stuff
- service providers and packages help simplify the complexity of it
# Account creation and login
- **getMe:** endpoint to get info on current user
## Create authentication endpoint
This takes an email and password and returns a cookie containing the authentication token and user ID. If the email already exists it returns a 409 (conflict) status code.
```
POST /auth/create HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}
```
## Login authentication endpoint
This takes an email and password and returns a cookie containing the authentication token and user ID. If the email does not exist or the password is bad it returns a 401 (unauthorized) status code.
```
POST /auth/login HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}
```
## GetMe endpoint
This uses the authentication token stored in the cookie to look up and return information about the authenticated user. If the token or user do not exist it returns a 401 (unauthorized) status code.
```
GET /user/me HTTP/2
Cookie: auth=tokenHere
HTTP/2 200 OK
Content-Type: application/json

{
  "email":"marta@id.com"
}
```
## Web service
With our service endpoints designed, we can now build our web service using Express.
```
const express = require('express');
const app = express();

app.post('/auth/create', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

app.post('/auth/login', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```
- Finishing up
1. Create a directory called authTest that we will work in.
2. Save the above content to a file named main.js. This is our starting web service.
3. Run npm init -y to initialize the project to work with node.js.
4. Run npm install express cookie-parser mongodb uuid bcrypt to install all of the packages we are going to use.
5. Run node main.js or press F5 in VS Code to start up the web service
6. You can now open a console window and use curl to try out one of the endpoints.
```
curl -X POST localhost:8080/auth/create
{"id":"user@id.com"}
```
## Handling requests
The first step is to read the credentials from the body of the HTTP request. Since the body is designed to contain JSON we need to tell Express that it should parse HTTP requests, with a content type of application/json, automatically into a JavaScript object. We do this by using the express.json middleware. We can then read the email and password directly out of the req.body object. We can test that this is working by temporarily including them in the response.
```
app.use(express.json());

app.post('/auth/create', (req, res) => {
  res.send({
    id: 'user@id.com',
    email: req.body.email,
    password: req.body.password,
  });
});
```
```curl -X POST localhost:8080/auth/create -H 'Content-Type:application/json' -d '{"email":"marta@id.com", "password":"toomanysecrets"}'```
```{"id":"user@id.com","email":"marta@id.com","password":"toomanysecrets"}```
Now that we have proven that we can parse the request bodies correctly, we can change the code to add a check to see if we already have a user with that email address. If we do, then we immediately return a 409 (conflict) status code. Otherwise we create a new user and return the user ID.
```
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    res.send({
      id: user._id,
    });
  }
});
```
## Using the database
Code set up to use the database:
```
const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
```
getUser & createUser funcs:
```
function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const user = {
    email: email,
    password: password,
    token: 'xxx',
  };
  return collection.insertOne(user);
}
```
## Generating authentication tokens
- **UUID:** pacakge, Universally Unique Identifier; creates unique, hard-to-guess id;
```
const uuid = require('uuid');

token: uuid.v4();
```
## Securing Passwords
- use **bcrypt** package creates a very secure one-way hash of the password
```
const bcrypt = require('bcrypt');

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}
```
## Passing authentication tokens
- gotta use the **cookie parser** package
- **httpOnly** tells the browser to not allow JavaScript running on the browser to read the cookie.
- **secure** requires HTTPS to be used when sending the cookie back to the server.
- **sameSite** will only return the cookie to the domain that generated it.
```
const cookieParser = require('cookie-parser');

// Use the cookie parser middleware
app.use(cookieParser());

apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}
```
## Login endpoint
The login authorization endpoint needs to get the hashed password from the database, compare it to the provided password using bcrypt.compare, and if successful set the authentication token in the cookie. If the password does not match, or there is no user with the given email, the endpoint returns status 401 (unauthorized).
```
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
```
## GetMe endpoint
```
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
```
## Final code
```
const { MongoClient } = require('mongodb');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
const collection = client.db('authTest').collection('user');

app.use(cookieParser());
app.use(express.json());

// createAuthorization from the given credentials
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);
    res.send({
      id: user._id,
    });
  }
});

// loginAuthorization from the given credentials
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// getMe for the currently authenticated user
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```
## Curl
- can use curl to experiment

# Web Services: Endpoint Design, Debugging Services
- **PM2:** will restart service to load things up so daemons don't go wacky
   - runs node in a way so that it doesn't dissappear into the vast void of the intertwebs
- gonna make index.js in service folder with express stuff
   - gonna handle the backend services etc...
- vite.config.js reroutes vite to the correct port (3000 for Simon, 4000 for Startup)

# 11/14/24 Web Services: Storage, Authentication
- basic steps to adding service to React project:
   - call backend (index.js big express stack with all endpoints) with fetch in frontend
- mongo db dude
   - gotta make an account and security username and password
- database shouldn't store the actual password in plain text
- hash algorithm, salt values, encrypt passwords my dudes
- gotta use endpoints for authentication
   - create, login 
- steal from simon my brotha

# 11/18/24 UI testing
- **TDD:** test driven development
## Automating the browser: Playwright
- **Selenium:** browser automation tool, flaky and slow
- **State of JS:** shows stats of various testing frameworks
- **Playwright:** newcomer in browser automation
   - It is backed by Microsoft, it integrates really well with VS Code, and it runs as a Node.js process.
   - It is also considered one of the least flaky of the testing frameworks.
- Steps on using Playwright:
   1. npm init playwright@latest
   2. Go to the extensions tab in VS Code and search for, and install, Playwright Test for VSCode.
   3. Create test file
   4. npm run start
   5. Click play on test
- **Browserstack:** let's you test out site on various device types

# Endpoint testing
## Jest
- To get started with Jest we need a simple web service:
   - In a console window, create a test directory, install Express, and open up VS Code.
```
mkdir testJest
cd testJest
npm init -y
npm install express
code .
```
- more funky stuff
- -> ```npm run test```
## Testing endpoints
- ```npm install supertest```

# 11/19/24 Database and Login: Simon
- in the actual service all the js and all the css are combined into two files total (because of vite)
- we're gonna use cookies now
- in index.js gotta require cookie parser now
- gonna bcrypt ur boy'
- in secureApiRouter.post gotta ...req.body the score ig
- database.js
- gotta debug a wild new way with atlas

# 11/20/24 Websocket
## Creating a Websocket Conversation
- JS on a browser -> convo with Websocket API
   - first gotta create a WebSocket object by specifying the port you want to communicate on
- ex:
```
const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};

socket.send('I am listening');
```
- **ws:** package used by server to create a WebSocketServer on same port as browser
   - by specifying port -> telling the server to listen for HTTP connections on that port and to automatically upgrade them to a WebSocket connection if the request has a connection: Upgrade header.
- When a connection is detected it calls the server's on connection callback. The server can then send messages with the send function, and register a callback using the on message function to receive messages.
- ex:
```
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});
```

# Debugging WebSocket
- VS Code to debug server, Chrome to debug client
## Debugging the server
1. Create a directory named testWebSocket and change to that directory.
2. Run npm init -y.
3. Run npm install ws.
4. Open VS Code and create a file named main.js. Paste the following code.
```
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});
```
5. Set breakpoints on the ws.send lines so you can inspect the code executing.
6. Start debugging by pressing F5. The first time you may need to choose Node.js as the debugger.
## Debugging the client
1. Open the Chrome debugger by pressing F12.
2. Paste this code into the debugger console window and press enter to execute it. Executing this code will immediately hit the server breakpoint. Take a look at what is going on and then remove the breakpoint from the server.
```
const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};
```
3. Select the Network tab and then select the HTTP message that was generated by the execution of the above client code.
4. With the HTTP message selected, you then click the Messages tab to view the WebSocket messages
5. Send a message to the server by executing the following in the debugger console window. This will cause the second server breakpoint to hit. Explore and then remove the breakpoint from the server.
```socket.send('I am listening');```
6. You should see the messages in the Messages debugger window.
7. Send some more messages and observe the communication back and forth without stopping on the breakpoints.

# WebSocket chat
## Chat client
- The HTML for the client provides an input for the user's name, an input for creating messages, and an element to display the messages that are sent and received.
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WebSocket Chat</title>
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <div class="name">
      <fieldset id="name-controls">
        <legend>My Name</legend>
        <input id="my-name" type="text" />
      </fieldset>
    </div>

    <fieldset id="chat-controls" disabled>
      <legend>Chat</legend>
      <input id="new-msg" type="text" />
      <button onclick="sendMessage()">Send</button>
    </fieldset>
    <div id="chat-text"></div>
  </body>
  <script src="chatClient.js"></script>
</html>
```
### DOM interaction
- event listener on the name input and disable the chat controls if the name ever is empty.
```
const chatControls = document.querySelector('#chat-controls');
const myName = document.querySelector('#my-name');
myName.addEventListener('keyup', (e) => {
  chatControls.disabled = myName.value === '';
});
```
- update the displayed messages by selecting the element with the chat-text ID and appending the new message to its HTML
```
function appendMsg(cls, from, msg) {
  const chatText = document.querySelector('#chat-text');
  chatText.innerHTML = `<div><span class="${cls}">${from}</span>: ${msg}</div>` + chatText.innerHTML;
}
```
- When a user presses the enter key in the message input we want to send the message over the socket. We do this by selecting the DOM element with the new-msg ID and adding a listener that watches for the Enter keystroke.
```
const input = document.querySelector('#new-msg');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
```
- When Enter is pressed the sendMessage function is called. This selects the text out of the new-msg element and the name out of the my-name element and sends that over the WebSocket. The value of the message element is then cleared so that it is ready for the next message.
```
function sendMessage() {
  const msgEl = document.querySelector('#new-msg');
  const msg = msgEl.value;
  if (!!msg) {
    appendMsg('me', 'me', msg);
    const name = document.querySelector('#my-name').value;
    socket.send(`{"name":"${name}", "msg":"${msg}"}`);
    msgEl.value = '';
  }
}
```
### WebSocket Connection
We can notify the user that chat is ready to go by listening to the onopen event and appending some text to the display using the appendMsg function we created earlier.
```
// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
  appendMsg('system', 'websocket', 'connected');
};
```
When the WebSocket receives a message from a peer it displays it using the appendMsg function.
```
socket.onmessage = async (event) => {
  const text = await event.data.text();
  const chat = JSON.parse(text);
  appendMsg('friend', chat.name, chat.msg);
};
```
And if the WebSocket closes for any reason we also display that to the user and disable the controls.
```
socket.onclose = (event) => {
  appendMsg('system', 'websocket', 'disconnected');
  document.querySelector('#name-controls').disabled = true;
  document.querySelector('#chat-controls').disabled = true;
};
```
## Chat Server
- The chat server runs the web service, serves up the client code, manages the WebSocket connections, and forwards messages from the peers.
### Web Service
- The web service is established using a simple Express application. Note that we serve up our client HTML, CSS, and JavaScript files using the static middleware.
```
const { WebSocketServer } = require('ws');
const express = require('express');
const app = express();

// Serve up our webSocket client HTML
app.use(express.static('./public'));

const port = process.argv.length > 2 ? process.argv[2] : 3000;
server = app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
```
### WebSocket server
-  use the HTTP connection that Express is providing and handle the upgrade to WebSocket ourselves. This is done by specifying the noServer option when creating the WebSocketServer and then handling the upgrade notification that occurs when a client requests the upgrade of the protocol from HTTP to WebSocket.
```
// Create a websocket object
const wss = new WebSocketServer({ noServer: true });

// Handle the protocol upgrade from HTTP to WebSocket
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request);
  });
});
```
### Forwarding messages
With the WebSocket server we can use the connection, message, and close events to forward messages between peers. On connection we insert an object representing the connection into a list of all connections from the chat peers. Then when a message is received we loop through the peer connections and forward it on to everyone except the peer who initiated the request. Finally we remove a connection from the peer connection list when it is closed.
```
// Keep track of all the connections so we can forward messages
let connections = [];

wss.on('connection', (ws) => {
  const connection = { id: connections.length + 1, alive: true, ws: ws };
  connections.push(connection);

  // Forward messages to everyone except the sender
  ws.on('message', function message(data) {
    connections.forEach((c) => {
      if (c.id !== connection.id) {
        c.ws.send(data);
      }
    });
  });

  // Remove the closed connection so we don't try to forward anymore
  ws.on('close', () => {
    connections.findIndex((o, i) => {
      if (o.id === connection.id) {
        connections.splice(i, 1);
        return true;
      }
    });
  });
});
```
### Keeping connections alive
A WebSocket connection will eventually close automatically if no data is sent across it. In order to prevent that from happening the WebSocket protocol supports the ability to send a ping message to see if the peer is still there and receive pong responses to indicate the affirmative.

It make this work we use setInterval to send out a ping every 10 seconds to each of our peer connections and clean up any connections that did not response to our previous ping.
```
setInterval(() => {
  connections.forEach((c) => {
    // Kill any connection that didn't respond to the ping last time
    if (!c.alive) {
      c.ws.terminate();
    } else {
      c.alive = false;
      c.ws.ping();
    }
  });
}, 10000);
```
In our connection handler we listen for the pong response and mark the connection as alive.
```
// Respond to pong messages by marking the connection alive
ws.on('pong', () => {
  connection.alive = true;
});
```
Any connection that did not respond will remain in the not alive state and get cleaned up on the next pass.

# WebSockets
- we want peers to be able to talk to each other until the connection closes
- ```npm install ws``` in relevant module

# 11/27/24 Simon WebSocket
- ```npm install ws```
- peerProxy.js
## Displaying and generating WebSocket messages
- The public/play.js file contains the functions for connecting, broadcasting, receiving, and displaying events using WebSocket.
## Configuring Vite to proxy ws requests
- modify vite.config.js
```
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
      '/ws': {
        target: 'ws://localhost:3000',
        ws: true,
      },
    },
  },
});
```
- clone
- credentials
- deploy

# 12/3/24 Security
- to see attempts to access server
   - ssh in
   - run ```sudo less +G /var/log/auth.log```
   - see your entry and any other attempts
 ## Security terminology
 - **Hacking** - The process of making a system do something it's not supposed to do.
 - **Exploit** - Code or input that takes advantage of a programming or configuration flaw.
 - **Attack Vector** - The method that a hacker employs to penetrate and exploit a system.
 - **Attack Surface** - The exposed parts of a system that an attacker can access. For example, open ports (22, 443, 80), service endpoints, or user accounts.
 - **Attack Payload** - The actual code, or data, that a hacker delivers to a system in order to exploit it.
 - **Input sanitization** - "Cleaning" any input of potentially malicious data.
 - **Black box testing** - Testing an application without knowledge of the internals of the application.
 - **White box testing** - Testing an application by with knowledge of the source code and internal infrastructure.
 - **Penetration Testing** - Attempting to gain access to, or exploit, a system in ways that are not anticipated by the developers.
 - **Mitigation** - The action taken to remove, or reduce, a threat.
## Motivation for attackers
- **Disruption** - By overloading a system, encrypting essential data, or deleting critical infrastructure, an attacker can destroy normal business operations. This may be an attempt at extortion, or simply be an attempt to punish a business that that attacker does not agree with.
- **Data exfiltration** - By privately extracting, or publicly exposing, a system's data, an attacker can embarrass the company, exploit insider information, sell the information to competitors, or leverage the information for additional attacks.
- **Resource consumption** - By taking control of a company's computing resources an attacker can use it for other purposes such as mining cryptocurrency, gathering customer information, or attacking other systems
## Common Hacking Techniques
- **Injection:** When an application interacts with a database on the backend, a programmer will often take user input and concatenate it directly into a search query. This allows a hacker can use a specially crafted query to make the database reveal hidden information or even delete the database.
- **Cross-Site Scripting (XSS):** A category of attacks where an attacker can make malicious code execute on a different user's browser. If successful, an attacker can turn a website that a user trusts, into one that can steal passwords and hijack a user's account.
- **Denial of Service:** This includes any attack where the main goal is to render any service inaccessible. This can be done by deleting a database using an SQL injection, by sending unexpected data to a service endpoint that causes the program to crash, or by simply making more requests than a server can handle.
- **Credential Stuffing:** People have a tendency to reuse passwords or variations of passwords on different websites. If a hacker has a user's credentials from a previous website attack, then there is a good chance that they can successfully use those credentials on a different website. A hacker can also try to brute force attack a system by trying every possible combination of password.
- **Social engineering** - Appealing to a human's desire to help, in order to gain unauthorized access or information.
## What can I do about it?
- **Sanitize input data** - Always assume that any data you receive from outside your system will be used to exploit your system. Consider if the input data can be turned into an executable expression, or can overload computing, bandwidth, or storage resources.
- **Logging** - It is not possible to think of every way that your system can be exploited, but you can create an immutable log of requests that will expose when a system is being exploited. You can then trigger alerts, and periodically review the logs for unexpected activity.
- **Traps** - Create what appears to be valuable information and then trigger alarms when the data is accessed.
- **Educate** - Teach yourself, your users, and everyone you work with, to be security minded. Anyone who has access to your system should understand how to prevent physical, social, and software attacks.
- **Reduce attack surfaces** - Do not open access anymore than is necessary to properly provide your application. This includes what network ports are open, what account privileges are allowed, where you can access the system from, and what endpoints are available.
- **Layered security** - Do not assume that one safeguard is enough. Create multiple layers of security that each take different approaches. For example, secure your physical environment, secure your network, secure your server, secure your public network traffic, secure your private network traffic, encrypt your storage, separate your production systems from your development systems, put your payment information in a separate environment from your application environment. Do not allow data from one layer to move to other layers. For example, do not allow an employee to take data out of the production system.
- **Least required access policy** - Do not give any one user all the credentials necessary to control the entire system. Only give a user what access they need to do the work they are required to do.
- **Safeguard credentials** - Do not store credentials in accessible locations such as a public GitHub repository or a sticky note taped to a monitor. Automatically rotate credentials in order to limit the impact of an exposure. Only award credentials that are necessary to do a specific task.
- **Public review** - Do not rely on obscurity to keep your system safe. Assume instead that an attacker knows everything about your system and then make it difficult for anyone to exploit the system. If you can attack your system, then a hacker will be able to also. By soliciting public review and the work of external penetration testers, you will be able to discover and remove potential exploits.\

# OWASP
- **Open Web Application Security Project (OWASP):** a non-profit research entity that manages the Top Ten list of the most important web application security risks.
- Understanding, and periodically reviewing, this list will help to keep your web applications secure.
## A01 Broken Access Control
- if application doesn't properly enforce authorization rules, then non-admins can do things they shouldn't be able to
- Mitigations include:
   - Strict access enforcement at the service level
   - Clearly defined roles and elevation paths
## A02 Cryptographic Failures
- Cryptographic failures occur when sensitive data is accessible either without encryption, with weak encryption protocols, or when cryptographic protections are ignored.
- Mitigations include:
   - Use strong encryption for all data. This includes external, internal, in transit, and at rest data.
   - Updating encryption algorithms as older algorithms become compromised.
   - Properly using cryptographic safeguards.
## A03 Injection
- Injection exploits occur when an attacker is allowed to supply data that is then injected into a context where it violates the expected use of the user input. For example, consider an input field that is only expected to contain a user's password. Instead the attacker supplies a SQL database command in the password input.
- Mitigations include:
   - Sanitizing input
   - Use database prepared statements
   - Restricting execution rights
   - Limit output
## A04 Insecure Design
- Insecure design broadly refers to architectural flaws that are unique for individual systems, rather than implementation errors. This happens when the application team doesn't focus on security when designing a system, or doesn't continuously reevaluate the application's security.
- Mitigations include:
   - Integration testing
   - Strict access control
   - Security education
   - Security design pattern usages
   - Scenario reviews
## A05 Security Misconfiguration
- Security misconfiguration attacks exploit the configuration of an application. Some examples include using default passwords, not updating software, exposing configuration settings, or enabling unsecured remote configuration.
- Mitigations include:
   - Configuration reviews
   - Setting defaults to disable all access
   - Automated configuration audits
   - Requiring multiple layers of access for remote configuration
## A06 Vulnerable and Outdated Components
- The longer an application has been deployed, the more likely it is that the attack surface, and corresponding exploits, of the application will increase. This is primarily due to the cost of maintaining an application and keeping it up to date in order to mitigate newly discovered exploits.
- Mitigations include:
   - Keeping a manifest of your software stack including versions
   - Reviewing security bulletins
   - Regularly updating software
   - Required components to be up to date
   - Replacing unsupported software
## A07 Identification and Authentication Failures
- Identification and authentication failures include any situation where a user's identity can be impersonated or assumed by an attacker. For example, if an attacker can repeatedly attempt to guess a user's password, then eventually they will be successful. Additionally, if passwords are exposed outside of the application, or are stored inside the application, with weak cryptographic protection, then they are susceptible to attack.
- Mitigations include:
   - Rate limiting requests
   - Properly managing credentials
   - Multifactor authentication
   - Authentication recovery
## A08 Software and Data Integrity Failure
- Software and data integrity failures represent attacks that allow external software, processes, or data to compromise your application. Modern web applications extensively use open source and commercially produced packages to provide key functionality. Using these packages without conducting a security audit, gives them an unknown amount of control over your application. Likewise, using a third party processing workflow, or blindly accessing external data, opens you up to attacks.
- Mitigations include:
   - Only using trusted package repositories
   - Using your own private vetted repository
   - Audit all updates to third party packages and data sources
## A09 Security Logging and Monitoring Failures
- Proper system monitoring, logging, and alerting is critical to increasing security. One of the first things an attacker will do after penetrating your application is delete or alter any logs that might reveal the attacker's presence. A secure system will store logs that are accessible, immutable, and contain adequate information to detect an intrusion, and conduct post-mortem analysis.
- Mitigations include:
   - Real time log processing
   - Automated alerts for metric threshold violations
   - Periodic log reviews
   - Visual dashboards for key indicators
## A10 Server Side Request Forgery (SSRF)
- This category of attack causes the application service to make unintended internal requests, that utilized the service's elevated privileges, in order to expose internal data or services.
- Mitigations include:
   - Sanitizing returned data
   - Not returning data
   - Whitelisting accessible domains
   - Rejecting HTTP redirects

# TypeScript
- TypeScript adds static type checking to JavaScript.
- explicitly defines types to avoid multi-logging in transpiling
## Interfaces
- **interface** keyword to define a collection of parameters and types that an object must contain in order to satisfy the interface type
## Beyond type checking
- TypeScript also provides other benefits, such as warning you of potential uses of an uninitialized variable.

# Performance monitoring
- In order to prevent losing users, you want your application to load in about one second. That means you need consistently measure and improve the responsiveness of your application. The main things you want to monitor include:
   - Browser application latency
   - Network latency
   - Service endpoint latency
## Browser application latency
- You can reduces the impact of file size, and HTTP requests in general, by doing one or more of the following:
   1. Use compression when transferring files over HTTP.
   2. Reduce the quality of images and video to the lowest acceptable level.
   3. Minify JavaScript and CSS. This removes all whitespace and creates smaller variable names.
   4. Use HTTP/2 or HTTP/3 so that your HTTP headers are compressed and the communication protocol is more efficient.
## Network latency
- You pay a latency price for every network request that you make. For this reason, you want to avoid making unnecessary or large requests.
- You can mitigate the impact of global latency by hosting your application files in data centers that are close to the users you are trying to serve. Applications that are seeking to reach a global audience will often host their application from dozens of places around the world.
## Service endpoint latency
- Service endpoint latency is impacted by the number of request that are made and the amount of time that it takes to process each request.
- You want to reduce the latency of your endpoints as much as possible. Ideally you want to keep the endpoint latency to less than 10 milliseconds (ms). This may seem like a very short time, but commonly, an application will make dozens of endpoint requests to render a component. If each of those endpoints take 10 ms, then you are looking at 100 to 200 ms. When you add network latency to the time it takes for the application to process the response, and then add the time it takes for the browser to render, you can easily exceed the desired 1 second load time.
## Performance tools
- there's a bunch of fun things you can do i'm not bothered to write down

# UX Design
- it exists
