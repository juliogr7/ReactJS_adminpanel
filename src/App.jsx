import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Clientes from './pages/Clientes'
import Usuarios from './pages/Usuarios'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<h1>Panel Administrativo</h1>} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/proveedor" element={<h1>Proveedor</h1>} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/logout" element={<h1>Logout</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
