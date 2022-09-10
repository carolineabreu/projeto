export function ProductList({ product }) {
  return (
    <div className="container">
      <img src={product.image} alt={product.name} />
      <div className="product-text">
        <h2>{product.name}</h2>
        <p>Quantity: {product.quantity}</p>
      </div>
    </div>
  );
}
