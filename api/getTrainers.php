<?php
    require_once "../config/config.php";

    
    $Trainer = $_REQUEST["Trainer"];
    $sql="SELECT name FROM users WHERE Is_Trainer = 1 AND username LIKE '".$Trainer."' ORDER BY name";
    $result=mysqli_query($link,$sql);
    while($row=mysqli_fetch_array($result))
    {
        $SelectedTrainer =array("Trainer"=>$row["name"]);
    }
    http_response_code(200);

    echo json_encode($SelectedTrainer);

?>