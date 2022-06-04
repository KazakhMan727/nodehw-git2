const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const carwashesRouter = require("./router/carwashesRouter");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use("/carwashes", carwashesRouter);

app.listen(8080);