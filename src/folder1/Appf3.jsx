import {useNavigate} from "react-router-dom";
import  {useState}from "react";

function Appf3(){
  let navigate = useNavigate();
  
  const [nama, setNama] = useState("");
  const [input, setinput] = useState("");
  
  function klik(){
    setNama(input);
  }

  
  return(
    <div className= "konten">
      <h3>hello appf3</h3>
      <button onClick={()=> navigate("/")}>Kembali</button>
      
      <br/>
      
         <input onChange={(e)=> setinput
         (e.target.value)}/>
         
          <button onClick ={klik}>input nama</button>
         <h2>{nama}</h2>
      
    </div>
    );
}


export default Appf3