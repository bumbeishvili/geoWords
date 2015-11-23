<?php
$flag    = $_GET['flag'];
$myArray = array();
if ($flag == 'word') {
    array_push($myArray, array(
        'text' => 'და',
        'quantity' => 85748
    ));
    array_push($myArray, array(
        'text' => 'რომ',
        'quantity' => 19088
    ));
	    array_push($myArray, array(
        'text' => 'არ',
        'quantity' => 17698
    ));
	    array_push($myArray, array(
        'text' => 'ამ',
        'quantity' => 9541
    ));
	    array_push($myArray, array(
        'text' => 'ეს',
        'quantity' => 9436
    ));
}

if ($flag == 'char') {
    array_push($myArray, array(
        'text' => 'ა',
        'quantity' => 1790653
    ));
    array_push($myArray, array(
        'text' => 'ი',
        'quantity' => 1275043
    ));
	    array_push($myArray, array(
        'text' => 'ე',
        'quantity' => 1020838
    ));
	    array_push($myArray, array(
        'text' => 'რ',
        'quantity' => 677465
    ));
	    array_push($myArray, array(
        'text' => 'ს',
        'quantity' => 744809
    ));
}


echo json_encode($myArray);
?>

