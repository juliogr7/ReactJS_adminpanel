const proveedores = [
  {
    id: 1,
    nombre: 'Suministros del Norte',
    producto: 'Equipos de oficina',
    estado: 'Activo',
  },
  {
    id: 2,
    nombre: 'Tecnologia Global',
    producto: 'Computadores',
    estado: 'Activo',
  },
  {
    id: 3,
    nombre: 'Papeleria Central',
    producto: 'Papeleria',
    estado: 'Inactivo',
  },
]

function Proveedor() {
  return (
    <div>
      <h1>Proveedor</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Producto</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((proveedor) => (
            <tr key={proveedor.id}>
              <td>{proveedor.id}</td>
              <td>{proveedor.nombre}</td>
              <td>{proveedor.producto}</td>
              <td>{proveedor.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Proveedor
