import Button from "./components/button";
import Nav from "./components/nav";
import "./index.css";
import Sec from "./components/section";
import Footer from "./components/footer";
import { useState, useRef, useEffect } from "react";
import {  useNavigate } from "react-router-dom"; 




function App() {
  const navigate = useNavigate();

  const [tx, ubah] = useState(true);
  // atas dan bawah untuk teks seperti textContent pada js
  const [teks1, ubahteks] = useState("ini teksnya");
  
  
  const p1 = useRef(null);
  //diatas seperti querySelector pada js

  useEffect(() => {
    if (p1.current) {
      p1.current.style.color = "red";
    }
  }, []); 
  // diatas seperti langsung mengubah tulisan seperti pada js
  


  function klik4() {
    ubah(prev => !prev);
  }
  //function klik4 seperti classList pada js 
 
  function klik5() {
    ubahteks("ini teks sudah diubah");
  }

  return (
    <div className="layout">
      <Nav texs="navgasi"/>

      <main className="content">
        <img
          className="img1"
          src="https://nexertc.github.io/websitear/websitear/img/ardeva.png"
          alt="foto"
        />
        <Button
          klik = {() => navigate("/app3")}
          teks="klik disinin app3"
          className="btnx"
        />
        <Button
          klik = {() => navigate("/app4")}
          teks="klik disinin app4"
          className="btnx"
        />
                <Button
          klik = {() => navigate("/appf1")}
          teks="klik disinin appf1"
          className="btnx"
        />
        
        <Sec
          namec="sec"
          tagh="tagh"
          tagp="tagp"
          teks="Ini adalah paragraft 1 yang dibuat menggunakan jsx section difolder components, terimakasih."
        />
        
        {tx && <p>hello ini paragraft</p>}
        <button onClick={klik4}>klik disini prev </button>

        <p ref={p1}>ini teks p1</p>

        <p>{teks1}</p>
        <button onClick={klik5}>klik disini</button>

        <h4>menuju halaman ke 2</h4>

      <button onClick={() => navigate("/app2")}> Pindah ke App2 </button>

      
      </main>
      
  
      <Footer tagfo="tagfo" teks="footer" />
    </div>
    
  );
}


 

export default App;