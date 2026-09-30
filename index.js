const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Learnfinity Cloud is live"));
app.get("/health", (req, res) => res.sendStatus(200));

if(require.main === module) app.listen(3000, () => console.log("Listening on 3000"));

module.exports = app