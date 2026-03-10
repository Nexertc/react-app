import { useNavigate } from "react-router-dom";


function App2() {
  
  const navigate = useNavigate();
  
  return(
    <div>
      <h3>ini adalah halaman ke 2</h3>
       <button onClick={() => navigate("/")}>
        Kembali ke Home
      </button>
      
    </div>
    );
}

export default App2;
