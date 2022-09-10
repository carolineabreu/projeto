import style from "./style.module.css";

export function ProductList({ product }) {
  return (
    <>
      <img src={product.image} alt={product.name} />
      <div className={style.text}>
        <h2>{product.name}</h2>
        <p>Quantity: {product.quantity}</p>
      </div>
    </>
  );
}
