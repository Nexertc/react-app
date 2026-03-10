import "../index.css";


function Sec({namec, tagh, tagp, teks}){
  
  return(

      <section className= {namec}>
       <h1 className= {tagh}>Paragraft 1</h1>
     <p className= {tagp}>{teks}</p>
      </section>

    );
  
}

export default Sec;