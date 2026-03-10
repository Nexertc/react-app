import {useNavigate} from "react-router-dom";
import "./Appf2.css";
import {useState} from "react";

function Appf2(){
  
  const navigate = useNavigate();
  
  const [tutup, buka] =  useState(false);
  
  function klik(){
    buka(!tutup);
  }
  
  return(
    <div>
       <main>
         <button onClick = {klik}>
           klik disini
           </button>
           
    {tutup &&  <div className= "popup">
     <button onClick={klik}>klik disini</button>
    </div>}
           
       </main>
    </div>
    );
}

export default Appf2;