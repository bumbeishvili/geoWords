<?php

include 'common.php';
$flag    = $_GET['flag'];
$myArray = array();
$mysqli  = getMysqli();

$query = "select s.title,s.quantity 
          from statistics s
           where s.loadKey = ?
		   order by quantity desc";

if ($stmt = $mysqli->prepare($query)) {
    $stmt->bind_param("s", $flag);
    // bind result variables 
    
    $stmt->execute();
    
    $stmt->bind_result($title, $quantity);
    //fetch values 
    while ($stmt->fetch()) {
        array_push($myArray, array(
            'title' => $title,
            'quantity' => $quantity
        ));
    }
    $stmt->close();
}

$mysqli->close();

echo json_encode($myArray);
?>
