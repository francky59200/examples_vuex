const express = require("express");
const cors = require('cors')
const bodyParser = require("body-parser")
const app = express();
const mysql = require("mysql")

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'));

 const connectionMysql = mysql.createConnection({
    host: 'mysql',
    user: 'user',
    password: 'password',
    database: 'authentication',
     port: '3306'
});

connectionMysql.connect((err) => {

    if (err)
        console.log(`Error while attempting to connect to database MySQL: ${JSON.stringify(err)}`);
    else
        console.log("connected as id " + connectionMysql.threadId);
});


connectionMysql.end()



let port = process.env.PORT || 3000;
let hostname = 'localhost';
app.listen(port,() => {
    console.log(`Server running at http://${hostname}:${port}/`);
});