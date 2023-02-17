<?php
require_once "../config/config.php";
require_once('../config/validateToken.php');

$isTrainer= $token->isTrainer;
$isAdmin= $token->isAdmin;

if($isTrainer==0 && $isAdmin ==0)
{
    echo "Missing Permissions to use this ressource";
    exit;
}

?>