
<?php

include 'common.php';

$query = "select word_value from words where word_value rlike ?";
$param = $_GET['template'];

echo (json_encode(extractResult($query ,$param)));

?>