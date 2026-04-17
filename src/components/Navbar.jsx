import Header from './Header'
import Menu from './Menu'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Header />
        <div className="navbar-collapse">
          <Menu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
