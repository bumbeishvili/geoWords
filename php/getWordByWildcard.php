<?php
 $arr = array(array ('value'=>'ვაიfesfsლდქარდი'));
 array_push($arr, array ('value'=>'ვაიfesdwafsლდქარდი'));
 array_push($arr, array ('value'=>'ვაიfeswdaawdfsლდქარდი'));
 array_push($arr, array ('value'=>'ვაიdawdawfesfsლდქარდი'));

 
$servername = "localhost";
$username = "testUser";
$password = "testPassword";
$dbname = "geoWords";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$conn->query ("set character_set_results='utf8'");
$sql = "SELECT value FROM test";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
     array_push($arr, array ('value'=>$row["value"]));
    }
} else {
    echo "0 results";
}
$conn->close();

 echo (json_encode($arr));

?>