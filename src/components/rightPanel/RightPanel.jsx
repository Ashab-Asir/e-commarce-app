import Cart from "./Cart";

export default function RightPanel({ carts, removeProductFromCart }) {
  console.log(carts);
  return (
    <div>
      <h1>cart</h1>
      <button>checkout</button>
      <ul>
        <Cart
          removeProductFromCart={removeProductFromCart}
          carts={carts}
        ></Cart>
      </ul>
    </div>
  );
}
