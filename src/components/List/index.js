import { Card } from "../Card";

export function List(props) {
  return (
    <>
      {props.map((currentproduct) => {
        return (
          <Card
            product={productName}
            quantity={productQuantity}
            image={productImage}
          />
        );
      })}
    </>
  );
}
