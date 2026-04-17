const clientes = [
  {
    id: 1,
    nombre: 'Juan Martinez',
    correo: 'juan@correo.com',
    telefono: '3001234567',
  },
  {
    id: 2,
    nombre: 'Maria Torres',
    correo: 'maria@correo.com',
    telefono: '3017654321',
  },
  {
    id: 3,
    nombre: 'Pedro Sanchez',
    correo: 'pedro@correo.com',
    telefono: '3024567890',
  },
]

function Clientes() {
  return (
    <div>
      <h1 className="mb-4">Clientes</h1>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle bg-white">
          <thead className="table-success">
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.correo}</td>
                <td>{cliente.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Clientes
