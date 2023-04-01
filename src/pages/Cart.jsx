import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart } from '../reducers/cart/cartSlice';

export const Cart = () => {
  const dispatch = useDispatch();

  //los productos que tengo en el store
  const { productsList } = useSelector(state => state.cart);

  // itero los productos que tengo en el carrito
  const handleRemoveProduct = (productId) => dispatch(removeProductFromCart(productId));

  return (
    <>
      <h2>Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map(product => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td scope="row">{product.nombre}</td>
                <td scope="row">{product.precio}</td>
                <td scope="row"><button className="btn btn-danger" onClick={() => handleRemoveProduct(product.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}