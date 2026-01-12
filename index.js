const express = require("express");
const app = express();

app.get("/", (req, res) => {res.sendFile('/index.html')});



const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
})





