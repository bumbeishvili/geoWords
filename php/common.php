
<?php



function extractResult($query, $param)
{
    
    
    $arr = array();
    
    
    $servername = "localhost";
    $username   = "testUser";
    $password   = "testPassword";
    $dbname     = "geoWords";
    
    // Create connection
    $mysqli = new mysqli($servername, $username, $password, $dbname);
    
    /* check connection */
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }
    
    
    if (!$mysqli->set_charset("utf8")) {
        printf("Error loading character set utf8: %s\n", $mysqli->error);
        exit();
    }
    
    if ($stmt = $mysqli->prepare($query)) {
        
        $stmt->bind_param("s", $param);
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
    
    return $arr;
    
}
?>
