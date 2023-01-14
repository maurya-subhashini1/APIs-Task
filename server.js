// const express=require("express")
// const app =express()

// app.use()
const express = require("express");
// require("dotenv").config()

const router = require("./routes/route");
const app = express();

const port = process.env.PORT || 2000;



app.use(express.json());
app.use("/", router);


app.listen(port, () => {
  console.log(`connection is live at port no?${port}`);
});
