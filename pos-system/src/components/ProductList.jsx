import { products } from "../data/products";

function ProductList({ setCart }) {
  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₱{product.price}</p>
          <p>Stock: {product.stock}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;