<?php
include 'common.php';

$param  = $_GET['template'];
$param = Converter::ToLatin($param);
$string = Converter::ToLatin($param);

$vowelsCount   = vowelsCount($string);

$rhymeLevel1Regex   = '$';
$rhymeLevel2Regex   = '$';
$rhymeLevel3Regex   = '$';
$rhymeLevel4Regex   = '$';
$rhymeLevel5Regex   = '$';
$rhymeLevel6Regex   = '$';

$splitedArray = splitBackPartByVowel($string);
//print_r($splitedArray);


  $ConsonantReplacer1="";
  $ConsonantReplacer2="";
  $ConsonantReplacer3="";
  $ConsonantReplacer4="";
  $ConsonantReplacer5="";
  $ConsonantReplacer6="[^aeiou]*";
  
if($vowelsCount>0){
  if($splitedArray[5]!=''){
	  $ConsonantReplacer1=$splitedArray[5];
	  $ConsonantReplacer2=generateConsonantRegex($splitedArray[5],'{1}');
	  $ConsonantReplacer3=generateConsonantRegex($splitedArray[5],'{1,}');
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
if($vowelsCount>1){
  if($splitedArray[3]!=''){
	  $ConsonantReplacer1=$splitedArray[5];
	  $ConsonantReplacer2=generateConsonantRegex($splitedArray[3],'{1}');
	  $ConsonantReplacer3=generateConsonantRegex($splitedArray[3],'{1,}');
      $ConsonantReplacer4="";
      $ConsonantReplacer5="";
  }
  $rhymeLevel1Regex=$splitedArray[2].$ConsonantReplacer1.$rhymeLevel1Regex;
  $rhymeLevel2Regex=$splitedArray[2].$ConsonantReplacer2.$rhymeLevel2Regex;
  $rhymeLevel3Regex=$splitedArray[2].$ConsonantReplacer3.$rhymeLevel3Regex;
  $rhymeLevel4Regex=$splitedArray[2].$ConsonantReplacer4.$rhymeLevel4Regex;
  $rhymeLevel5Regex=$splitedArray[2].$ConsonantReplacer5.$rhymeLevel5Regex;
  $rhymeLevel6Regex=$splitedArray[2].$ConsonantReplacer6.$rhymeLevel6Regex;
}

if($vowelsCount>2){
 if($splitedArray[1]!=''){
	  $ConsonantReplacer1=$splitedArray[1];
	  $ConsonantReplacer2=generateConsonantRegex($splitedArray[1],'{1}');
	  $ConsonantReplacer3=generateConsonantRegex($splitedArray[1],'{1,}');
      $ConsonantReplacer4="";
      $ConsonantReplacer5="";
  }
  $rhymeLevel1Regex=$splitedArray[0].$ConsonantReplacer1.$rhymeLevel1Regex;
  $rhymeLevel2Regex=$splitedArray[0].$ConsonantReplacer2.$rhymeLevel2Regex;
  $rhymeLevel3Regex=$splitedArray[0].$ConsonantReplacer3.$rhymeLevel3Regex;
  $rhymeLevel4Regex=$splitedArray[0].$ConsonantReplacer4.$rhymeLevel4Regex;
  $rhymeLevel5Regex=$splitedArray[0].$ConsonantReplacer5.$rhymeLevel5Regex;
  $rhymeLevel6Regex=$splitedArray[0].$ConsonantReplacer6.$rhymeLevel6Regex;
}


//printRegexes();




    
    
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
    $query = "select word_geo word_geo,
                (word_eng regexp(?))  + (word_eng regexp(?) ) accuracy,
                levenshtein(word_eng,?) distance
             from words
             where word_eng rlike ?
             order by accuracy desc,distance asc";
			 
		//	 ?=e[dTt]{1,}e[nrl]{1,}i$'
		//	 ?=e[dTt]{1}e[nrl]{1}i$,
		//	 ?='kedeli'
		//	 ?= e[dTt]{1,}e[nrl]{1,}i$
			 
			 
    if ($stmt = $mysqli->prepare($query)) {
		
        $stmt->bind_param("ssss",$rhymeLevel2Regex,$rhymeLevel3Regex,$param,$rhymeLevel3Regex);
        /* execute statement */
		
        $stmt->execute();
        
        
        // bind result variables 
        $stmt->bind_result($word_value,$word_accuracy,$word_distance);
        
        $counter = 0;
        //fetch values 
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
    




echo (json_encode($arr));





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



function generateConsonantRegex($consonants,$repeatNumberRegex){
    $result='';
    for ($i = 0; $i < strlen($consonants); $i++) {
      $result=$result.'['.getRelatedConsonants($consonants[$i]).']'.$repeatNumberRegex;
    }
    return $result;
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
