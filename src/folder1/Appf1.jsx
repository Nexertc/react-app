import {useNavigate} from "react-router-dom";
import Sec from "../components/section";
import "./Appf1.css";
import Nav from "../components/nav";
import {useState, useRef} from "react";

function Appf1(){
  const navigate = useNavigate();
  
  const [aktif, ubah] = useState(false);
  
  function klik3(){
    ubah(!aktif);
  }
  
  
  return(
   
   <div>     
   <Nav texs= "nwvigasi" />
    <main className= "konten">

      <button
      className="btnr"
      onClick= {()=> navigate("/")}>
        Kembali
        </button>
        
        <button className= "btnr"
        onClick= {klik3}>Ubah warna text
        </button>
        
        <h3 className ={aktif ? "merah"  
        : "" }
        >Hello World</h3>
        
              <Sec
          namec="secx"
          tagh="taghx"
          tagp="tagpx"
          teks="Ini adalah paragraft 1 yang dibuat menggunakan jsx section difolder components, terimakasih."
        />
      
      <button className= "btnr" onClick= {() => navigate("/appf2")}>klik Appf2</button>
      
    </main>
    </div>
    );
}

export default Appf1