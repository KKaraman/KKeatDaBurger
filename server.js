const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes (controllers) and give the server access to them.
const burgerRoutes = require("./controllers/burgerController.js");

app.use(burgerRoutes);

app.listen(PORT, () => {
  console.log(`Server is live @ http://localhost:${PORT}`);
});
