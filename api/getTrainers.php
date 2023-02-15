<?php
    require_once "../config/config.php";
    require_once('../config/validateToken.php');

    $sql="SELECT name FROM users WHERE Is_Trainer = 1 AND username LIKE 'holzweber' ORDER BY name";
    $result=mysqli_query($link, $sql);
    while ($row=mysqli_fetch_array($result)) {
        $SelectedTrainer =array("Trainer"=>$row["name"]);
    }
    http_response_code(200);     
    echo json_encode($SelectedTrainer);



?>