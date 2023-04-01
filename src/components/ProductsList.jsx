import {addProductToCart, removeProductFromCart } from '../reducers/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux';


export const ProductsList = ({ products }) => {

  const dispatch = useDispatch();

  
  //Lo que tengo en el carrito y los productos que tengo agregados
  const { productsList } = useSelector(state => state.cart);

  const handleAddOrRemoveProduct = (productId) => {
    const product = products.find(product => product.id === productId);
    //si es producto con ese id se encuentra dentro del listado quiero que lo elimines sino que lo agregues
    if (productsList.find(pdt => pdt.id === productId)) {
      dispatch(removeProductFromCart(productId));
    } else {
      dispatch(addProductToCart(product));
    }
  }

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

                <button
                  className={`btn ${productsList.find(pdt => pdt.id === product.id) ? "btn-danger" : "btn-success"}`}
                  onClick={() => handleAddOrRemoveProduct(product.id)}
                >
                  {productsList.find(pdt => pdt.id === product.id) ? "Remove" : "Add"} to Cart
                </button>
               
              </div>
            )
          })
        }
      </div>
    </>
  )
}