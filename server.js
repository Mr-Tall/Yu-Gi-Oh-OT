const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 5000;

// API route to fetch all cards
app.get('/api/cards', async (req, res) => {
    try {
        const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching card data:', error);
        res.status(500).json({ message: 'Error fetching card data' });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
