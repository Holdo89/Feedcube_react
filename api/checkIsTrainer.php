<?php
require_once "../config/config.php";
require_once('../config/validateToken.php');

$Username = $token->userName;

$sql="SELECT COUNT(id) FROM users WHERE username LIKE '".$Username."'and Is_Trainer = 1";
$query=mysqli_query($link, $sql);
$row = mysqli_fetch_array ($query);

if($row["COUNT(id)"]==0)
{
    echo "Missing Permissions to use this ressource";
    exit;
}

?>