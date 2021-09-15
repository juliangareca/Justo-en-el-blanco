import carrito from './cart4.svg'


const NavBar = () =>{

    return  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="../index.html">Justo en el Blanco</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="../sabanas.html">Sabanas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../frazadas.html">Frazadas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../toallas.html">Toallas</a>
          </li>
          <button type="button" class="btn">
            <img src={carrito}/> <button class="badge bg-secondary">0</button>
          </button>
        </ul>
      </div>
    </div>
  </nav>
  }
  

  export default NavBar;