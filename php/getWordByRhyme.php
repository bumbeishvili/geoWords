<?php
include 'common.php';

$param  = $_GET['template'];
$string = Converter::ToLatin($param);

echo $param . '<br>';

echo "<br>";
$vowelsCount   = vowelsCount($string);

$rhymeLevel1Regex   = '$';
$rhymeLevel2Regex   = '$';
$rhymeLevel3Regex   = '$';
$rhymeLevel4Regex   = '$';
$rhymeLevel5Regex   = '$';
$rhymeLevel6Regex   = '$';

$splitedArray = splitBackPartByVowel($string);
print_r($splitedArray);

if($vowelsCount>0){
  $ConsonantReplacer1="";
  $ConsonantReplacer2="";
  $ConsonantReplacer3="";
  $ConsonantReplacer4="";
  $ConsonantReplacer5="";
  $ConsonantReplacer6="[^aeiou]*";
  if($splitedArray[5]!=''){
	  $ConsonantReplacer1=$splitedArray[5];
	  $ConsonantReplacer2="";
	  $ConsonantReplacer3="";
      $ConsonantReplacer4="";
      $ConsonantReplacer5="";
  }
  $rhymeLevel1Regex=$splitedArray[4].$ConsonantReplacer1.$rhymeLevel1Regex;
  $rhymeLevel2Regex=$splitedArray[4].$ConsonantReplacer2.$rhymeLevel2Regex;
  $rhymeLevel3Regex=$splitedArray[4].$ConsonantReplacer3.$rhymeLevel3Regex;
  $rhymeLevel4Regex=$splitedArray[4].$ConsonantReplacer4.$rhymeLevel4Regex;
  $rhymeLevel5Regex=$splitedArray[4].$ConsonantReplacer5.$rhymeLevel5Regex;
  $rhymeLevel6Regex=$splitedArray[4].$ConsonantReplacer6.$rhymeLevel6Regex;
}
printRegexes();
/*
if($vowelsCount>1){

}
if($vowelsCount>1){

}
*/
function printRegexes(){
	global $rhymeLevel1Regex ,$rhymeLevel2Regex,$rhymeLevel3Regex ,$rhymeLevel4Regex ,$rhymeLevel5Regex,$rhymeLevel6Regex;
	echo "<br>";
	echo $rhymeLevel1Regex.'<br>'; 
	echo $rhymeLevel2Regex.'<br>'; 
	echo $rhymeLevel3Regex.'<br>'; 
	echo $rhymeLevel4Regex.'<br>'; 
	echo $rhymeLevel5Regex.'<br>'; 
	echo $rhymeLevel6Regex.'<br>'; 
}
// "satesto"    returns 'a','t','e','st','o,''
// "vefxvisebr" returns 'e','fxv','i','s','e ','br'
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
            $array[$counter--] = $string[$i];
        } else {
            //contains consonant
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


function getRelatedConsonants($ch){
    $allRelatedConsonats = array('bfpm','dTt','v','Zcwzs','jCWJS','gqkRx','y','h','nrl');
	foreach( $allRelatedConsonats as $relatedConsonants){
		if (strpos($relatedConsonants,$ch) !== false) return $relatedConsonants;
	}
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