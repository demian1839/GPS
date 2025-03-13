const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// 🛠 NEUE ROUTE für "/" → Gibt eine Begrüßungsnachricht aus
app.get('/', (req, res) => {
    res.send("GPS Speed Tracker API läuft! Nutze /speedlimit?lat=xxx&lon=xxx");
});

app.get('/speedlimit', async (req, res) => {
    try {
        const { lat, lon } = req.query;
        if (!lat || !lon) {
            return res.status(400).json({ error: "Bitte GPS-Koordinaten (lat, lon) angeben." });
        }

        // OpenStreetMap Overpass API Query
        const overpassQuery = `[out:json];way(around:50,${lat},${lon})[maxspeed];out;`;
        const overpassUrl = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;

        const response = await axios.get(overpassUrl);
        const ways = response.data.elements;

        if (ways.length > 0) {
            const speedLimit = ways[0].tags.maxspeed || "Unbekannt";
            return res.json({ speedLimit });
        } else {
            return res.json({ speedLimit: "Unbekannt" });
        }
    } catch (error) {
        console.error("Fehler bei der API-Anfrage:", error);
        res.status(500).json({ error: "Interner Serverfehler" });
    }
});

app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Erlaubt CORS für alle Anfragen

app.get('/speedlimit', async (req, res) => {
    try {
        const { lat, lon } = req.query;

        if (!lat || !lon) {
            return res.status(400).json({ error: "Bitte GPS-Koordinaten (lat, lon) angeben." });
        }

        // Overpass API Query, um das Tempolimit zu erhalten
        const overpassQuery = `[out:json];way(around:50,${lat},${lon})[maxspeed];out;`;
        const overpassUrl = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;

        const response = await axios.get(overpassUrl);
        const ways = response.data.elements;

        if (ways.length > 0) {
            const speedLimit = ways[0].tags.maxspeed || "Unbekannt";
            return res.json({ speedLimit });
        } else {
            return res.json({ speedLimit: "Unbekannt" });
        }
    } catch (error) {
        console.error("Fehler bei der API-Anfrage:", error);
        res.status(500).json({ error: "Interner Serverfehler" });
    }
});

app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});
