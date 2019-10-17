const express = require("express");
const path = require("path");
const http = require("http");

const routes = require("./routes");

const app = express();
const port = process.env.PORT || "3000";

app.use("/", express.static(path.join(__dirname, "..", "dist")));
app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.use("/", routes);
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Server Running on port ${port}`));
