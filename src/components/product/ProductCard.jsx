import { useContext } from "react";
import "./ProductCard.css";
import { CartContext } from "../../contexts/CartContext";
export default function ProductCard({ product }) {
  const { addToCartProduct } = useContext(CartContext);
  return (
    <div className="productCard">
      <img src={product.image} width="200px" alt="" />
      <p>{product.title}</p>
      <p>{`$${product.price}`}</p>
      <button onClick={() => addToCartProduct(product)}>Add to cart</button>
    </div>
  );
}
