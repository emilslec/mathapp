import React from 'react';
import { useNavigate } from "react-router-dom";


const Homebutton = ({ updateUser}) => {
  let navigate = useNavigate();

  return (
    <div className="">
      <div className="">
        <input
          onClick={() =>{ updateUser(''); navigate("/")}} 
          className="fr tc ma2 f6 link dim ba bw1 ph3 pv2 mb2 dib dark-gray"
          type="submit" 
          value="Sign out"></input>
      </div>
      <div className="">
        <input 
         onClick={() => navigate("/home")}
         className="fr trasparent tc ma2 f6 link dim o-50 ba bw1 ph3 pv2 mb2 dib dark-gray"
         type="submit" 
         value="Home page"></input>
       </div>
   </div>
  )

}


export default Homebutton