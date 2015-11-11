<?php
include 'common.php';

$param  = $_GET['template'];
$string = Converter::ToLatin($param);

echo $param . '<br>';

echo "<br>";
$vowelsCount   = vowelsCount($string);
$rhymeExpert   = '$';
$rhymeMedium   = '$';
$rhymeBeginner = '$';

$splitedArray = splitBackPartByVowel($string);
print_r($splitedArray);
/*
if($vowelsCount>0){

}
if($vowelsCount>1){

}
if($vowelsCount>1){

}
*/
function splitBackPartByVowel($string)
{
    $array   = array(
        '',
        '',
        '',
        '',
        '',
        ''
    );
    $counter = 5;
    for ($i = strlen($string) - 1; $i >= 0; $i--) {
        if ($counter < 0)
            break;
        //contains vowel
        if (strpos('aeiou', $string[$i]) !== false) {
            
            if ($counter % 2 == 1) {
                $counter--;
            }
            echo "vowel " . $string[$i] . ' ' . $counter . "<br>";
            $array[$counter--] = $string[$i];
        } else {
            //contains consonant
            echo "consonant " . $string[$i] . ' ' . $counter . "<br>";
            $subStrLength = 0;
            while ($i >= 0) {
                
                if (strpos('aeiou', $string[$i]) !== false) {
                    break;
                }
                $subStrLength++;
                $i--;
            }
            $array[$counter--] = substr($string, $i + 1, $subStrLength);
            if ($i >= 0) {
                $array[$counter--] = $string[$i];
            }
        }
    }
    
    return $array;
}


function vowelsCount($string)
{
    $count = 0;
    for ($i = 0; $i < strlen($string); $i++) {
        if (strpos('aeiou', $string[$i]) !== false) {
            $count++;
        }
    }
    return $count;
}

?>