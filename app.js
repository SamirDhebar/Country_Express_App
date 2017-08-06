const express = require("express");
const app = express();

const countriesRoutes = require("./router/countries.js");

app.set("view engine", "ejs");
app.use(express.static("assets"));

app.use("/", countriesRoutes);

app.get("*", function (req, res) {
	res.send('<img src="assets/css/images/404.jpg">');

});

app.listen(3000, function() {
	console.log("Your server is available at localhost:3000!");
});
