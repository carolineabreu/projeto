

export function Card(props) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{props.productName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {props.productQuantity}
          </h6>
          <img className="image" src= {props.productImage} alt= {props.productName}/>
        </div>
      </div>
    </>
  );
}
