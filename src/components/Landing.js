import React from 'react'
import './Landing.css'
import {useNavigate} from 'react-router-dom'

function Landing() {

  // const handleCallBackResponse = (response) => {
  //   console.log("encoded jwt tokent", response.credential);
  // }

  // useEffect(()=>{
  //   google.accounts.id.initialize({
  //     client_id:"970972680929-jc9q6g4ob0fd6hauqnfphulcipgri3ec.apps.googleusercontent.com",
  //     callback:handleCallBackResponse
  //   });

  //   google.accounts.id.renderButton(
  //     document.getElementById("sing-button"),
  //     {theme:outline , size:"large"}
  //   );
  // },[])
  const navigate = useNavigate();
  return (
    <div className='Landing-container'>
        <div className="text">
        <h2>Welcom to Xhipment Post <br/>Login or Sign up <br/>to create and Manage Posts</h2>
        <button onClick={()=>navigate("/home")}>Sign In With Google</button>
        </div>
    </div>
  )
}

export default Landing