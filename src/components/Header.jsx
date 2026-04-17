import logo from '../img/logo.png'

function Header() {
  return (
    <div className="d-flex align-items-center gap-2">
      <img className="logo-panel" src={logo} alt="Logo" width="42" height="42" />
      <span className="navbar-brand mb-0 fw-bold">Panel Administrativo</span>
    </div>
  )
}

export default Header
