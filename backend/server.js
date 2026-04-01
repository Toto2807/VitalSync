const express = require("express");
const app = express(); // Mofi by add-endpoint // Modif by update-health

app.get("/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date() });
});

app.get("/api/activities", (req, res) => {
    res.json([]);
});

app.listen(3000, () => console.log("VitalSync API on :3000"));