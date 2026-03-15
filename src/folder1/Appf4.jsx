import {useNavigate} from "react-router-dom";
import "./Appf2.css";
import {useState, useRef} from "react";

function Appf4(){

const navigate = useNavigate;
  const inputRef = useRef();

  function fokus(){
    inputRef.current.focus();
  }
  
  let [aktif,setaktif] = useState(false);
  
  function klik(){
     setaktif(!aktif);
  }
  
  return(
    <div className = "konten">
      <input ref={inputRef}/> 
      <button onClick={fokus}>Fokus</button>
      {
      /* Jiks menekan tombol maka cursor akan ke input 
      */
      }
      
      <button onClick= {klik}>klik disini</button>
      
      {aktif && <div className= "popup">
     
      </div>}
      
    </div> 
  )
}


export default Appf4;