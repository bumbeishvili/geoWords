
<?php
function getDbCredentials()
{
    return array(
        "servername" => "localhost",
        "username" => "testUser",
        "password" => "testPassword",
        "dbname" => "geoWords"
    );
}

function getMysqli()
{
    $credentials = getDbCredentials();
    // Create connection
    $mysqli      = new mysqli($credentials["servername"], $credentials["username"], $credentials["password"], $credentials["dbname"]);
    
    /* check connection */
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }
    
    if (!$mysqli->set_charset("utf8")) {
        printf("Error loading character set utf8: %s\n", $mysqli->error);
        exit();
    }
    return $mysqli;
}

function getStatementByQueryFromMysqli($query, $mysqli)
{
    if ($stmt = $mysqli->prepare($query)) {
        return $stmt;
    } else
        return -1;
}

function closeConnections($stmt, $mysqli)
{
    /* close statement */
    $stmt->close();
    $mysqli->close();
}

function extractResult($filterType, $param)
{
    
    $arr    = array();
    $query  = "select word_geo from words where word_eng " . $filterType . " ? ";
    $mysqli = getMysqli();
    $stmt   = getStatementByQueryFromMysqli($query, $mysqli);
    $param  = Converter::ToLatin($param);
    $stmt->bind_param("s", $param);
    /* execute statement */
    $stmt->execute();
    // bind result variables 
    $stmt->bind_result($word_value);
    
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
    closeConnections($stmt, $mysqli);
    return $arr;
    
}

class Converter
{
    private static $geoToLatinBinding = array('a', 'b', 'g', 'd', 'e', 'v', 'z', 'T', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'J', 'r', 's', 't', 'u', 'f', 'q', 'R', 'y', 'S', 'C', 'c', 'Z', 'w', 'W', 'x', 'j', 'h');
    private static $latinToGeoBinding = array('A', 'B', 'ჩ', 'D', 'E', 'F', 'G', 'H', 'I', 'ჟ', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'ღ', 'შ', 'თ', 'U', 'V', 'ჭ', 'X', 'Y', 'ძ', '[', '\\', ']', '^', '_', '`', 'ა', 'ბ', 'ც', 'დ', 'ე', 'ფ', 'გ', 'ჰ', 'ი', 'ჯ', 'კ', 'ლ', 'მ', 'ნ', 'ო', 'პ', 'ქ', 'რ', 'ს', 'ტ', 'უ', 'ვ', 'წ', 'ხ', 'ყ', 'ზ');
    
    public static function ToLatin($word)
    {
        return self::convert($word, self::$geoToLatinBinding, 4304, 4336);
    }
    
    public static function ToGeorgian($word)
    {
        return self::convert($word, self::$latinToGeoBinding, 65, 122);
    }
    
    public static function convert($word, $binding, $min, $max)
    {
        $buffer   = array();
        $length   = mb_strlen($word, "UTF-8");
        $chrArray = preg_split('//u', $word, -1, PREG_SPLIT_NO_EMPTY);
        for ($i = 0; $i < $length; $i++) {
            $ch    = $chrArray[$i];
            $chOrd = self::_uniord($ch);
            if ($chOrd >= $min && $chOrd <= $max) {
                $buffer[] = $binding[$chOrd - $min];
            } else {
                $buffer[] = $ch;
            }
        }
        return implode($buffer);
    }
    
    
    private static function _uniord($c)
    {
        if (ord($c{0}) >= 0 && ord($c{0}) <= 127)
            return ord($c{0});
        if (ord($c{0}) >= 192 && ord($c{0}) <= 223)
            return (ord($c{0}) - 192) * 64 + (ord($c{1}) - 128);
        if (ord($c{0}) >= 224 && ord($c{0}) <= 239)
            return (ord($c{0}) - 224) * 4096 + (ord($c{1}) - 128) * 64 + (ord($c{2}) - 128);
        if (ord($c{0}) >= 240 && ord($c{0}) <= 247)
            return (ord($c{0}) - 240) * 262144 + (ord($c{1}) - 128) * 4096 + (ord($c{2}) - 128) * 64 + (ord($c{3}) - 128);
        if (ord($c{0}) >= 248 && ord($c{0}) <= 251)
            return (ord($c{0}) - 248) * 16777216 + (ord($c{1}) - 128) * 262144 + (ord($c{2}) - 128) * 4096 + (ord($c{3}) - 128) * 64 + (ord($c{4}) - 128);
        if (ord($c{0}) >= 252 && ord($c{0}) <= 253)
            return (ord($c{0}) - 252) * 1073741824 + (ord($c{1}) - 128) * 16777216 + (ord($c{2}) - 128) * 262144 + (ord($c{3}) - 128) * 4096 + (ord($c{4}) - 128) * 64 + (ord($c{5}) - 128);
        if (ord($c{0}) >= 254 && ord($c{0}) <= 255) //  error
            return FALSE;
        return 0;
    }
}

?>
