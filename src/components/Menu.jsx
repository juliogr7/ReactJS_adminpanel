import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink className="nav-link" to="/clientes">Clientes</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/proveedor">Proveedor</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/usuarios">Usuarios</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/logout">Logout</NavLink>
      </li>
    </ul>
  )
}

export default Menu
