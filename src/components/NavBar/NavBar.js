const NavBar = () =>{

    return  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Justo en el Blanco</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Sabanas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Frazadas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Toallas</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  }
  

  export default NavBar;