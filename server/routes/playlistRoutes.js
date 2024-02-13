import express from 'express';
import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'PlaylistDB';

const router = express.Router();

router.get('/playlist', async (req, res) => {
    let client;

    try {
        client = new MongoClient(url);
        await client.connect();
        console.log("Connecté à MongoDB");

        const db = client.db(dbName);
        const collection = db.collection('playlist');
        const playlist = await collection.find({}).toArray();
        res.json(playlist);
    } catch (error) {
        console.error('Erreur lors de la récupération de la playlist:', error);
        res.status(500).send('Erreur interne du serveur');
    } finally {
        if (client) {
            await client.close();
        }
    }
});

export default router;
