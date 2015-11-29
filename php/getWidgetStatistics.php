<?php
include 'common.php';
$myArray = array();
$mysqli  = getMysqli();

push_widget_stat("UniqueWordsCount", $mysqli,$myArray );
push_widget_stat("AllWordsCount", $mysqli,$myArray );
push_widget_stat("AllCharCount", $mysqli,$myArray );
$mysqli->close();

echo json_encode($myArray);


function push_widget_stat($key, &$mysqli,&$myArray)
{
    $query = "select s.quantity 
          from statistics s
           where s.loadKey = ?";
    if ($stmt = $mysqli->prepare($query)) {
        $stmt->bind_param("s", $key);
        $stmt->execute();
        $stmt->bind_result($quantity);
        //fetch values 
        if ($stmt->fetch()) {
            $myArray[$key]= $quantity;
        }
        $stmt->close();
    }
}

?>