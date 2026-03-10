import "../index.css";

function Button({ teks, className, klik}) {
  return (
    <button className={className} 
    onClick={klik}
    >
      {teks}
    </button>
  );
}

export default Button;