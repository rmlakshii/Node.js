const express = require('express');
const app = express();

// Middleware to read the form data (POST request)
app.use(express.urlencoded({ extended: true }));

// Variable to store the name
let storedName = "";

// 1. HOME PAGE (GET Request) - Shows the Welcome UI from your screenshot
app.get('/', (req, res) => {
    res.send(`
        <div style="text-align: center; margin-top: 50px; font-family: sans-serif;">
            <h1>Welcome</h1>
            <p>Please enter your name to receive a greeting.</p>
            <form action="/submit" method="POST">
                <input type="text" name="userName" placeholder="Enter your name" required>
                <br><br>
                <button type="submit">Get Greeting</button>
            </form>
        </div>
    `);
});

// 2. THE POST REQUEST - Takes the name and stores it
app.post('/submit', (req, res) => {
    storedName = req.body.userName; // Store name in variable
    res.redirect('/greet');         // Redirect to the greeting page
});

// 3. THE GREETING PAGE (GET Request) - Shows the "Hello" UI from your screenshot
app.get('/greet', (req, res) => {
    res.send(`
        <div style="text-align: center; margin-top: 50px; font-family: sans-serif;">
            <h1>Hello, ${storedName}!</h1>
            <br>
            <a href="/">Go Back</a>
        </div>
    `);
});

const PORT = 3000;
app.listen(PORT);
