
<?php

include 'common.php';

$query = "select word_value from words where word_value like ?";
$param = $_GET['template'];

echo (json_encode(extractResult($query ,$param)));

?>