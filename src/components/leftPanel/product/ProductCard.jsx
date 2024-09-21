import "./ProductCard.css";
export default function ProductCard({ product, addToCartProduct }) {
  return (
    <div className="productCard">
      <img src={product.image} width="200px" alt="" />
      <p>{product.title}</p>
      <p>{`$${product.price}`}</p>
      <button onClick={() => addToCartProduct(product)}>Add to cart</button>
    </div>
  );
}
