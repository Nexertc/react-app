import "../index.css";
import Button from "./button.jsx";
import {useState} from "react";

function Nav({texs}) {
  
  const [show, setShow] = useState(false);
  
  function klik(){
    setShow(true);
  }
  
  function klik2(){
    setShow(false);
  }
  
  return(
    
    <div>
      <nav className="navv">
        {texs}
      <Button 
   teks="🗯"
   className="btn2"
   klik = {klik}
   />
        </nav>
        
     { show &&
     <div className="cos">
       <button onClick = {klik2}>klik disini</button>
     </div> 
     }
     
     
{ show &&
     <div className="ove"></div>
     }

    </div> 
     
    
    );
  
}

export default Nav;