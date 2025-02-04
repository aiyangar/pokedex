import "./navbar.styles.css"

function Navbar() {
  return (
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Pokedex</a>
          <input placeholder="búsqueda" value="" />
          <button>
            Buscar
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px', marginLeft: '5px' }}>
              <path d="M 50,0 A 50,50 0 0 1 100,50 L 0,50 A 50,50 0 0 1 50,0" fill="red" />
              <path d="M 50,50 m -50,0 a 50,50 0 1,0 100,0" fill="white" />
              <path d="M 5 50 H 100" stroke="black" strokeWidth="5"/>
              <circle cx="50" cy="50" r="20" fill="white" stroke="black" strokeWidth="5"/>
              <circle cx="50" cy="50" r="10" fill="white" stroke="white" strokeWidth="5"/>
            </svg>
          </button>
        </div>
  )
}

export default Navbar