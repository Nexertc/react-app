import "../index.css"

function Footer({teks, tagfo}){
  return (
  <div>
  <footer className = {tagfo}>
    
    <p>{teks}</p>
  </footer>
  </div>

);
}

export default Footer;