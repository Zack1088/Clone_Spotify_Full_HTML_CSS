const express = require('express');
const app = express();
const port = 3000;

// Importer les routes
const playlistRoutes = require('./routes/playlistRoutes');
const {join} = require("path");

app.use(express.static('public'));

app.use(playlistRoutes);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Le serveur écoute sur http://localhost:${port}`);
});
