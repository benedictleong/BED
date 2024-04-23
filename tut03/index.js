//benedict leong 2304128 DISM/FT/2B/22

// Attempt 1
// Plain nodejs implementation
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('<h1>Hello World!</h1>')
// });

// server.listen(3000, () => {
//     console.log('Server running on port 3000');
// });

// Attempt 2
// Using express module
const express = require('express');
const app = express();
const port = 3000;
const findUserById = (userId) => {
    return {
        userId: userId,
        userDesc: "Description for User " + userId + "."
    }
}

app.get('/', (req, res) => {
    res.send('<h1>Hello World from my express server!</h1>')
});

app.get('/user/:id', (req, res) => {
    //accessing parameter from the request
    const userId = req.params.id;
    //fetching user object
    const user = findUserById(userId);
    //sending user details as a response in JSON format
    res.json(user);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});