<?php
    require_once "./checkPermission.php";
    
    $Username = $token->userName;

    $sql="SELECT * FROM users WHERE username LIKE '".$Username."'";
    $result=mysqli_query($link, $sql);
    while ($row=mysqli_fetch_array($result)) {
        $UserContext =array("Name"=>$row["name"], "Username"=>$row["username"], "Role"=>$row["Role"]);
    }
    http_response_code(200);     
    echo json_encode($UserContext);

?>