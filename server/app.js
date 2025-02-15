const express = require('express');
const zod = require("zod");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

app.get("/demo", (req, res) => {
    return res.json({
        msg: "Hello from backend"
    })
})