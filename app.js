const cors = require("cors");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use("/healthcheck", require("./routes/healthcheck.routes"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  headers = { http_status: 200, "cache-control": "no-cache" };
  body = { "hej": "hå" }; /* en json */
  res.set("Content-Type", "application/json");
  res.status(200).send(body);
});
app.get("/allBookings", (req, res) => {
  headers = { http_status: 200, "cache-control": "no-cache" };
  body = [{"plats 1" : "bookad" }, {"plats 2" : "ej bokad"}];
  res.set("Content-Type", "application/json");
  res.status(200).send(body);
});


app.listen(PORT, () => {
  console.log(`STARTED LISTENING ON PORT ${PORT}`);
});
