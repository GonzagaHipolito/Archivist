const mysql = require('mysql2/promise');

const ccn = mysql.createConnection({
    host: 'localhost',
    port: '3000',
    user: 'root',
    database:'archivist',
    password : '123456'
});

ccn.connect (err=>{
    if (err){
        console.log("no connection error: " + err);
    }else{
        console.log("Bd Connect");
    }
});

module.exports = ccn;