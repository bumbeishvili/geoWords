
<?php
include 'common.php';
$param = $_GET['template'];
echo (json_encode(extractResult("rlike" ,$param)));
?>