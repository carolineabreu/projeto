import { Card } from "../Card";

export function List(props) {
  return (
    <>
      {props.map((currentproduct) => {
        return (
          <Card
            product={currentproduct.productName}
            quantity={currentproduct.productQuantity}
            image={currentproduct.productImage}
          />
        );
      })}
    </>
  );
}
