// Create web server and listen on port 3000
// Use express to create a web server
const express = require('express');
const app = express();

// Use the body-parser package to parse incoming data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Store comments in an array
let comments = [];

// Create a route for the home page
app.get('/', (req, res) => {
  res.send(`
    <h1>Comments</h1>
    <ul>
      ${comments.map(comment => `<li>${comment}</li>`).join('')}
    </ul>
    <form method="POST" action="/addComment">
      <input type="text" name="comment" />
      <button>Submit</button>
    </form>
  `);
});

// Create a route for adding a comment
app.post('/addComment', (req, res) => {
  comments.push(req.body.comment);
  res.redirect('/');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});