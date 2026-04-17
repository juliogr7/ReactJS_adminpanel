const usuarios = [
  {
    id: 1,
    nombre: 'Carlos Perez',
    rol: 'Administrador',
    estado: 'Activo',
  },
  {
    id: 2,
    nombre: 'Laura Gomez',
    rol: 'Editor',
    estado: 'Activo',
  },
  {
    id: 3,
    nombre: 'Andres Ruiz',
    rol: 'Invitado',
    estado: 'Inactivo',
  },
]

function Usuarios() {
  return (
    <div>
      <h1 className="mb-4">Usuarios</h1>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle bg-white">
          <thead className="table-success">
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.rol}</td>
                <td>{usuario.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Usuarios
