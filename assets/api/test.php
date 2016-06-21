<?php

$server = '86.96.194.194';
$port = '2016';
$username = 'jins';
$password = 'gl_programmer2';
$database = 'Tracking_db';

//$db = new PDO("dblib:host=$server; dbname=$database", "$username", "$password");
$connection = mssql_connect($server, $port, $username, $password);

if($connection != FALSE)
{
echo "Connected to the database server OK<br />";
}
else
{
die("Couldn't connect");
}

if(mssql_select_db($database, $connection))
{
echo "Selected $database ok<br />";
}
else
{
die('Failed to select DB');
}

$query_result = mssql_query('SELECT * FROM View_LiveVehicleSignal');
$row = mssql_fetch_array($query_result);

if($row != FALSE)
{
echo "Version is {$row[0]}<br />";
}
mssql_free_result($query_result);
mssql_close($connection);
?>
