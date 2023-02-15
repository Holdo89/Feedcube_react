<?php

declare(strict_types=1);
require_once "../config/config.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

use Firebase\JWT\JWT;

require_once('../vendor/autoload.php');

$data = json_decode(file_get_contents("php://input", true));

$enteredUsername =  mysqli_real_escape_string($link, $data->username);
$enteredPassword =  mysqli_real_escape_string($link, $data->password);
//TODO Wenn keine EIngaben passieren soll kein Fehler gelogged werden

$sql = "SELECT password FROM users WHERE username = '".$enteredUsername."' LIMIT 1";
$result = mysqli_query($link,$sql);
$row = mysqli_fetch_assoc($result);
if(password_verify($enteredPassword, $row["password"]))
{
    $hasValidCredentials=true;
}
else{
    $hasValidCredentials=false;
}

if ($hasValidCredentials) {
    $secretKey  = 'bGS6lzFqvvSQ8ALbOxatm7/Vk7mLQyzqaS34Q4oR1ew=';
    $issuedAt   = new DateTimeImmutable();
    $expire     = $issuedAt->modify('+6 minutes')->getTimestamp();      // Add 60 seconds
    $serverName = "localhost";
    $username   = $data->username;                                           // Retrieved from filtered POST data

    $data = [
        'iat'  => $issuedAt->getTimestamp(),         // Issued at: time when the token was generated
        'iss'  => $serverName,                       // Issuer
        'nbf'  => $issuedAt->getTimestamp(),         // Not before
        'exp'  => $expire,                           // Expire
        'userName' => $username,                     // User name
    ];

    echo JWT::encode(
        $data,
        $secretKey,
        'HS512'
    );
}
else{
    echo "invalid credentials";
}

?>
 