<?php
$flag    = $_GET['flag'];
$myArray = array();
if ($flag == 'word') {
    array_push($myArray, array(
        'text' => 'და',
        'quantity' => 10245054
    ));
    array_push($myArray, array(
        'text' => 'ან',
        'quantity' => 1024054
    ));
	    array_push($myArray, array(
        'text' => 'კი',
        'quantity' => 1020000
    ));
	    array_push($myArray, array(
        'text' => 'არა',
        'quantity' => 1004054
    ));
	    array_push($myArray, array(
        'text' => 'კაცი',
        'quantity' => 102405
    ));
}

if ($flag == 'char') {
    array_push($myArray, array(
        'text' => 'ა',
        'quantity' => 102145054
    ));
    array_push($myArray, array(
        'text' => 'ი',
        'quantity' => 75000147
    ));
	    array_push($myArray, array(
        'text' => 'ლ',
        'quantity' => 20000047
    ));
	    array_push($myArray, array(
        'text' => 'კ',
        'quantity' => 1004054
    ));
	    array_push($myArray, array(
        'text' => 'მ',
        'quantity' => 1402405
    ));
}


echo json_encode($myArray);
?>

