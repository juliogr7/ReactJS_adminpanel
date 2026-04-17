import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Clientes from './pages/Clientes'
import Logout from './pages/Logout'
import Proveedor from './pages/Proveedor'
import Usuarios from './pages/Usuarios'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container py-5">
        <Routes>
          <Route path="/" element={<h1 className="mb-4">Panel Administrativo</h1>} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/proveedor" element={<Proveedor />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
