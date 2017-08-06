const express = require("express");
const router = express.Router();
const countries = require("../json/countries.json");
//	console.log(countries);

// ---> /countries/:code
router.get("/:code", function(req, res) {
	var country = countries[req.params.code.toUpperCase()];

	if (!country) {
		res.status(400);
		return res.send("*");
	}
	res.render("template", {
		page: "page/countries.ejs",
		data: country,
	});


});

// Homepage for the app with Djibouti rendering as default country
router.get('/', function (req,res) {
	var home = countries.DJI;

	res.render("template", {
		page: "page/countries.ejs",
		data: home,
	});
});

module.exports = router;
