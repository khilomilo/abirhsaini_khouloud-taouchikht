var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "aseds"
})
con.connect((err) => {
    if (err) throw err;
    console.log("connected")

});
mysql.exports() = mysql;