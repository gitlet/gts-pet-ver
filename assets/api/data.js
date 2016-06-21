/**
 * Created by zoodoo92 on 21/06/16.
 */
var sql = require('mssql');

sql.connect("mssql://jins:gl_programmer2@86.96.194.194:2016/Tracking_db").then(function() {
    // Query

    new sql.Request().query('select * from View_LiveVehicleSignal').then(function (recordset) {
        console.log(recordset);
    }).catch(function (err) {
        // ... query error checks
        console.log(err);
    });
});

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