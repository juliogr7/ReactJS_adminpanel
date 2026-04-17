function Menu() {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link" href="/clientes">Clientes</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/proveedor">Proveedor</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/usuarios">Usuarios</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/logout">Logout</a>
      </li>
    </ul>
  )
}

export default Menu
