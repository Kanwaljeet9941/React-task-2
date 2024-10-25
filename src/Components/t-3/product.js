import "./product.css";
function Product(props) {
  return (
    <div className="container">
      <h1>Task 3 ----------------</h1>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
      <p>Stock: {props.inStock ? "In Stock" : "Out of Stock"}</p>
      {props.price > 100 && <p>Premium Product</p>}
    </div>
  );
}

export default Product;
