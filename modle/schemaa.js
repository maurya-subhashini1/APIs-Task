const mongoose = require("mongoose");
const MONGO_URL =
  process.env.MONGO_URL ||"mongodb://127.0.0.1:27017/mydb";
mongoose.set('strictQuery', false)
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connection Successfully..");
  })
  .catch((err) => {
    console.log(err);
  });

var products = mongoose.Schema(
  {
    eventId: {
      type: String,
      // ref:"collections",
      required: true,
    },
    eventName: {
      type: String,
      required: true,
    },
    marketId: {
        type: String,
        required: true,
      },
    
   
  },
  { collection: "cricket" }
);
const crickets = mongoose.model("cricket", products);
module.exports = { crickets };
