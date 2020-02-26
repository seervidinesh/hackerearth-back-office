const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

// body-parser setup

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// routes setup
const loanRoute = require("./routes/loan");
app.use("/api/loan", loanRoute);

// listen app on port
app.listen(PORT, () => console.log(`App Running on port ${PORT}`));
