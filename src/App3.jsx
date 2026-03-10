

import {useState, useEffect, useRef} from "react";
import "./app3.css";


function App3(){
  
  const [in1, sets] = useState("");
  const [hasil, hasilv] = useState("");
  
  function klik(){
    const in1= parseInt(in1);
    
    if(in1>= 90){
      hasilv("Nilai A");
    }
    else if(in1 >= 70){
      hasilv("nilai B");
    }
    else{
      hasilv("nilai C");
    }
  }
    const [tutup, buka] = useState(false);
    
    function klik1(){
      buka(true);
    }
    
    
    
    
    
  
  return(
    <div className= "app3">
     <input 
     type= "number"
     value= {in1}
     placeholder = "isi"
     onChange = {(e) => sets(e.target.value)}
     />
     
     <button onClick = {klik}>klik disini</button>
     <h3>{hasil}</h3>
     


     
    </div>
    );
}
export default App3