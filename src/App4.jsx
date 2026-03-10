

import {useState, useEffect, useRef} from "react";
import "./App.css";


function App3(){
  
  const [aktif, setAktif] = useState(false);

  function klik() {
    setAktif(!aktif);
    // ! mengubah menjadi kebalikannya misal true jadi false atau false menjadi true
    
    //karena aktif itu nilai awalnya false maka akan diubah ke true tapi kalo di klik lagi maka akan diubah lagi ke false
  }

  
  return(
    <div className= "app3">

 <button onClick={klik}>Klik</button>

      <div className={aktif ? "box aktif" : "box"}> 

        <button onClick={klik}>Klik</button>
      </div>

    </div>
    );
    
 // ? dan : itu seperti if else sederhana, jika misal true akan ke box aktif tapi kalo false akan ke box 
 
 //  ? → bagian jika kondisi benar (true) →    seperti if
//   : → bagian jika kondisi salah (false) →    seperti else
    
    
    
}
export default App3