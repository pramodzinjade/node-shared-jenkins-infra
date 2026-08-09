const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "success",
        message: "PicShare Node.js application is running"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`PicShare running on port ${PORT}`);
});