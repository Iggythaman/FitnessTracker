const express = require("express");
const mongoose = require("mongoose");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//connect to db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
// ROUTES
app.use(require("./routes/backEndRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

//Start the Server

app.listen(PORT, function() {
  console.log("App is listening on PORT" + PORT);
});
