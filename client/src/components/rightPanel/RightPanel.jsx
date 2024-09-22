import { Cart } from "../cart";

export default function RightPanel() {
  return (
    <div>
      <h1>cart</h1>
      <button>checkout</button>
      <ul>
        <Cart></Cart>
      </ul>
    </div>
  );
}
