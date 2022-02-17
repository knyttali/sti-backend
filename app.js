const cors = require("cors")
const express = require("express")

const app = express()
const PORT = process.env.PORT || 3001

app.use('/healthcheck', require('./routes/healthcheck.routes'));
app.use(express.urlencoded( { extended: true }));
app.use(cors())

app.get("/", (req ,res)=>{
    headers={"http_status":200, "cache-control": "no-cache"}
    body={"blaha":"blä"}
    res.set('Content-Type', 'application/json')
    res.status(200).send(body)
});

app.get("/football", (req ,res)=>{
    headers={"http_status":200, "cache-control": "no-cache"}
    body=
    [
        {
            "name": "AIK",
            "points": 9
        },
        {
            "name": "DIF",
            "points": 6
        },
        {
            "name": "BP",
            "points": 5
        },
        {
            "name": "HSK",
            "points": 3
        }
    ]
    res.set('Content-Type', 'application/json')
    res.status(200).send(body)
})

app.listen(PORT , ()=>{
    console.log(`STARTED LISTENING ON PORT ${PORT}`)
});