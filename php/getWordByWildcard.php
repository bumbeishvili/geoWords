<?php
$arr = array();


$servername = "localhost";
$username   = "testUser";
$password   = "testPassword";
$dbname     = "geoWords";

// Create connection
$mysqli = new mysqli($servername, $username, $password, $dbname );

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}


if (!$mysqli->set_charset("utf8")) {
    printf("Error loading character set utf8: %s\n", $mysqli->error);
    exit();
} 

//$conn->query("set character_set_results='utf8'");

$query=("select word_value from words where word_value like ?");  // where word_value like ?


if ( $stmt = $mysqli->prepare($query)) {
	

   $stmt->bind_param("s",$_GET['template']);
    /* execute statement */
    $stmt->execute();
	
	
    /* bind result variables */
    $stmt->bind_result($word_value);
   
    $counter = 0;
    /* fetch values */
    while ($stmt->fetch()) {
      if ($counter++ > 999) {
            break;
        }
        array_push($arr, array(
		    'id' => $counter,
            'value' => $word_value
        ));
    }

    /* close statement */
    $stmt->close();
}


$mysqli->close();
echo (json_encode($arr));

?>