const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/data/playlist', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'data', 'playlist.json'));
});

module.exports = router;