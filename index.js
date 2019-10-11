const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/authcallback", (req, res) => {
	const app_details = {
		app_name: "Afrologix Coda parser",
		auth: true
	};
	res.json(app_details);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
