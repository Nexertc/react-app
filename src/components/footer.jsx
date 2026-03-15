import "../index.css"

function Footer({teks, tagfo}){
  return (
  <div className = {tagfo}>
  <footer className = {tagfo}>
    
    <p>{teks}</p>
  </footer>
  </div>

);
}

export default Footer;