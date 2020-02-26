const mongoose = require("mongoose");
const csv = require("csvtojson");
const loanSchema = require("./modal/Loan");

// connect mongodb database
var connection = mongoose.createConnection(
  "mongodb://localhost:27017/hackerearthbackoffice",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// create schema
var Loan = connection.model("loan", loanSchema);

// dump csv Matches data to mongodb Matches Schema
connection.once("open", async () => {
  if ((await Loan.countDocuments().exec()) > 0) return;
  Promise.all([
    csv()
      .fromFile("./csv/loan.csv")
      .then(jsonObj => {
        var loanData = jsonObj.filter(item => item.id !== "id");
        Loan.insertMany(loanData)
          .then(res => console.log("Loan Data Added to Database"))
          .catch(err => console.log(err));
      })
  ])
    .then(() => console.log("Adding Loan Data to MongoDb Database"))
    .catch(err => console.log(err));
});

// export schema
module.exports = {
  Loan
};
