<?php
    require_once "./checkIsAdmin.php";

    $sql="SELECT name FROM users WHERE username LIKE '".$Username."'";
    $result=mysqli_query($link, $sql);
    while ($row=mysqli_fetch_array($result)) {
        $SelectedTrainer =array("Trainer"=>$row["name"]);
    }
    http_response_code(200);     
    echo json_encode($SelectedTrainer);

?>