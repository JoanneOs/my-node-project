//created folder 
//npm init -y
//created server.js
//created new repo
//git init
// Add a .gitignore File (Important)
// Create a new file .gitignore and add:

// node_modules/
// .env
// This prevents unnecessary files from being pushed to GitHub.
// git add .
// git commit -m "Initial commit"
// git push -u origin main

//in json file the js file was index.js, corrected to server.js
//command S for saving

//npm start




//writing simple server:

// Load the HTTP module (built-in in Node.js)
const http=require('http');

// Create an empty function for now
function handleRequest(req, res){
    res.setHeader('Content-Type', 'text/html');//set the Content-Type header to text/html for all responses
     // Handle different routes
  if (req.url === '/') {
    res.statusCode=200;
    res.end(`
      <h1>Welcome to Simple Chat</h1>
      <p>Try these routes:</p>
      <ul>
        <li><a href="/hello">/hello</a> - Get a greeting</li>
        <li><a href="/time">/time</a> - Check current time</li>
        <li><a href="/chat">/chat</a> - Random chat message</li>
      </ul>
    `);
  }else if (req.url === '/hello') {
    res.end('<h2>Hello there! </h2><p>How are you today?</p>');
  }
  else if (req.url === '/time') {
    res.end(`<p>The current time is: ${new Date().toLocaleTimeString()}</p>`);
  }
  else if (req.url === '/chat') {
    const messages = [
      "What's on your mind?",
      "Nice to see you here!",
      "How can I help you today?",
      "Did you know this is a simple Node server?",
      "Try refreshing for a new message!"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    res.end(`<p>${randomMessage}</p>`);
  }
  else {
    res.end('<h2>404 - Page not found</h2><p>Try one of our chat routes!</p>');
  }
}

// Create a basic server
const server=http.createServer(handleRequest);

// Start the server
const PORT=3000;  
server.listen(PORT,()=>{
    console.log(`you can run server on http://localhost:${PORT}`);

});

// Why 3000, 5000, or 8080?
// These are common unreserved ports for web development:

// 3000 → Popular for frontend frameworks like React, Vue, and Express.js servers.
// 5000 → Often used for backend development in Node.js, Python (Flask), etc.
// 8080 → Another alternative to 80 (default HTTP port).

//saved again
//run: node server.js
