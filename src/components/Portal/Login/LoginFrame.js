import 'bootstrap/dist/css/bootstrap.css';
import Feedcubelogo from "../../../assets/brand/FEEDCUBE_logo_login.png";
import Deviceimage from "../../../assets/brand/devices.png";
import axios from "axios";
import React from "react";
import {baseURL} from "../../General/baseURL.js"

const getTrainer = baseURL+"/getTrainers.php?Trainer=holzweber";

const LoginFrame = () => {

  const [post, setPost] = React.useState("");

  React.useEffect(() => {axios.get(getTrainer).then((response) => {setPost(response.data.Trainer);});}, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    var changeTrainerName = baseURL+"/changeTrainerName.php?Trainer=holzweber&NewName="+{post}.post;
    axios.put(changeTrainerName).then((response) => {setPost(response.data);});
  }

  return (
      <form id = "loginForm" className="form-signin" onSubmit={handleSubmit}>
        <img src={Feedcubelogo} alt="logo" height="80px" style={{marginBottom:"20px"}}/>
        <div className="LoginFrame">
            <div>
                <img src={Deviceimage} alt="devices" height="200" className="devicesImage"/>            
            </div>
            <div>
                <input type="text" name="username" onChange={(e) => setPost(e.target.value)} className="LoginInput" placeholder="Username"/>
                <input type="password" name="password" className="LoginInput" placeholder="Password"/>
                <div style={{textAlign:"left"}}>
                <a className="Link" style={{textAlign:"left"}}>Passwort vergessen?</a>
                </div>
                <input type="submit" className="btn btn-primary" value="Login"></input>
                <p style={{marginTop:"20px"}}>Neu bei Feedcube? <a className="Link">Benutzer erstellen</a></p>
            </div>
        </div>
        <p>{post}</p>
      </form>
  )
}

export default LoginFrame

