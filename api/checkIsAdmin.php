<?php
require_once "../config/config.php";
require_once('../config/validateToken.php');

$isAdmin= $token->isAdmin;

if($isAdmin==0)
{
    echo "Missing Permissions to use this ressource";
    exit;
}

?>