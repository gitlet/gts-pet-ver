/**
 * Created by zoodoo92 on 21/06/16.
 */
// var sql = require('mssql');
//
// sql.connect("mssql://jins:gl_programmer2@86.96.194.194:2016/Tracking_db").then(function() {
//     // Query
//
//     new sql.Request().query('select * from View_LiveVehicleSignal').then(function (recordset) {
//         console.log(recordset);
//     }).catch(function (err) {
//         // ... query error checks
//         console.log(err);
//     });
// });

//mysql

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '86.96.194.194',
    port     :  '2020',
    user     : 'jins',
    password : 'gl_programmer2',
    database : 'Tracking_db'
});

connection.connect();

connection.query('SELECT TOP 5 * FROM View_LiveVehicleSignal', function(err, rows, fields) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(rows);
    }

});

connection.end();

// var Connection = require('tedious').Connection;
// var config = {
//     username: "jins",
//     password: "gl_programmer2",
//     server: "86.96.194.194:2020",
//     database: "Tracking_db"
// };
//
// var myconn = new Connection(config);
//
// myconn.on('connect', function (err, recordset) {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         var Request = require('tedious').Request;
//         function getData() {
//             request = new Request("SELECT * FROM View_LiveVehicleSignal");
//             console.log(recordset);
//         }
//
//     }
// });