import 'bootstrap/dist/css/bootstrap.css';
import Feedcubelogo from "../../../assets/brand/FEEDCUBE_logo_login.png";
import Deviceimage from "../../../assets/brand/devices.png";
import React from "react";
import {sendGetRequest} from "../../General/sendGetRequest.js"
import {validateCredentials} from "../../General/validateCredentials"


const LoginFrame = () => {

  const [username, setUsername] = React.useState(""); 
  const [password, setPassword] = React.useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    validateCredentials({username, password})
  }

  return (
      <form id = "loginForm" className="form-signin" onSubmit={handleSubmit}>
        <img src={Feedcubelogo} alt="logo" height="80px" style={{marginBottom:"20px"}}/>
        <div className="LoginFrame">
            <div>
                <img src={Deviceimage} alt="devices" height="200" className="devicesImage"/>            
            </div>
            <div>
                <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} className="LoginInput" placeholder="Username"/>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="LoginInput" placeholder="Password"/>
                <div style={{textAlign:"left"}}>
                <a className="Link" style={{textAlign:"left"}}>Passwort vergessen?</a>
                </div>
                <input type="button" onClick={() => sendGetRequest("getTrainers.php")} id="button" className="btn btn-primary" value="getTrainerName"></input>
                <input type="submit" className="btn btn-primary" value="Login"></input>
                <p style={{marginTop:"20px"}}>Neu bei Feedcube? <a className="Link">Benutzer erstellen</a></p>
            </div>
        </div>
        <p>{username}</p>
      </form>
  )
}

export default LoginFrame

