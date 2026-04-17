import logo from '../img/logo.png'

function Header() {
  return (
    <div className="d-flex align-items-center gap-2">
      <img src={logo} alt="Logo" width="42" height="42" />
      <span className="navbar-brand mb-0 h1">Panel Administrativo</span>
    </div>
  )
}

export default Header
