//Create web server
// 1. Create a new Express web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());

// 2. Create a new route that listens for HTTP GET requests to the URL /comments
app.get('/comments', (req, res) => {
    // 3. Read the comments.json file
    fs.readFile('comments.json', 'utf8', (error, data) => {
        if (error) {
            console.log(error);
            res.status(500).send('Server error');
            return;
        }
        // 4. Send the contents of the comments.json file as the HTTP response
        res.send(data);
    });
});

// 5. Create a new route that listens for HTTP POST requests to the URL /comments
app.post('/comments', (req, res) => {
    // 6. Read the comments.json file
    fs.readFile('comments.json', 'utf8', (error, data) => {
        if (error) {
            console.log(error);
            res.status(500).send('Server error');
            return;
        }
        // 7. Parse the contents of the comments.json file into an array
        const comments = JSON.parse(data);
        // 8. Add the new comment to the array
        comments.push(req.body);
        // 9. Write the updated array back to the comments.json file
        fs.writeFile('comments.json', JSON.stringify(comments, null, 2), (error) => {
            if (error) {
                console.log(error);
                res.status(500).send('Server error');
                return;
            }
            // 10. Send a success message as the HTTP response
            res.send('Comment added');
        });
    });
});

// 11. Start the web server on port 3000
app.listen(3000, () => {
    console.log('Server started');
});

// 12. Open the browser and navigate to http://localhost:3000/comments to see the comments.json file
// 13. Use a REST client to send a POST request to http://localhost:3000/comments with a new comment as the request body