
const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose');
const RouterModel = require("./routes/menuRoute");
const app = express()
const port = 8080;




app.use(express.json());
app.use(cors());
app.use("/",RouterModel);

mongoose.connect('mongodb+srv://aslanzmazmp202:aslan2004@clusterimmigration.njfsy.mongodb.net/menu?retryWrites=true&w=majority&appName=ClusterImmigration')
  .then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
    console.log('Connected!')});
