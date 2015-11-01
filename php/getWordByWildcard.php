<?php
$arr = array();


$servername = "localhost";
$username   = "testUser";
$password   = "testPassword";
$dbname     = "geoWords";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$conn->query("set character_set_results='utf8'");

$query=("SELECT word_value FROM words where word_value like ?");


if ( $stmt = $conn->prepare($query)) {
    $stmt->bind_param("s","'დაწ'");
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


$conn->close();
echo (json_encode($arr));

?>