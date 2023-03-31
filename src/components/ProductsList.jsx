

export const ProductsList = ({ products }) => {


  return (
    <>
      <h2>Listado de productos</h2>
      <div className="row">
        {
          products.map(product => {
            return (
              <div key={product.id} className="col-3 mt-3">
                <h4>{product.nombre}</h4>
                <p><b>Price:</b> {product.precio}</p>
                <p><b>Category:</b> {product.ingredientes}</p>
               
              </div>
            )
          })
        }
      </div>
    </>
  )
}