const express = require('express');
require('dotenv').config()
const db = require('./db/db.js')
const router = require("./router");
const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(router)

db()
    .then(() => {
        app.listen(PORT, () => console.log("Server running on port: " + PORT))
    })
    .catch((error) => {
        console.log("DB not working");
    })


