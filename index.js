// Import required modules
const express = require('express');
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// POST endpoint at /git-info
app.post('/git-info', (req, res) => {
    // Extract data from request body
    const gitInfo = req.body;
    
    // Log the received data to the console (optional)
    console.log('Received git info:', gitInfo);
    
    // Respond back with the received data
    res.status(200).json({
        message: 'Git info received successfully',
        data: gitInfo
    });
});

app.get('/', (req, res) => {
    
    res.status(200).json({
        message: 'working'
    });
});

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
