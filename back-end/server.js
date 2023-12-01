const express = require('express')
const app = express()
const request = require('request');

app.use(express.json());

app.post("/api", (req,res) => {
    const country = req.body.country;
    const url = `https://restcountries.com/v3.1/name/${country}`;
    request(url, { json: true }, (err, result, body) => {
        if (err) { return console.log(err); }
        data = body[0]
        res.json(data)
    });
})


app.listen(5000, () => console.log("Server started on port 5000"))