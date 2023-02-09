<?php
    require_once "../config/config.php";
    
    $Trainer = $_REQUEST["Trainer"];
    $newName = $_REQUEST["NewName"];
    $sql="UPDATE users SET name = '".$newName."' WHERE username LIKE '".$Trainer."'";
    $result=mysqli_query($link,$sql);

    echo $newName;

?>
