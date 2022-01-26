 var express = require("express");
 var router = express.Router();

 router.get("/", (req, res) => {
     res.send("in sr")
 });

 module.exports = router;