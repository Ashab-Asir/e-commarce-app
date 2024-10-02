import React from "react";
import { CartProvider } from "../contexts";
import { LeftPanel, RightPanel } from "../components";
export function HomePages() {
  return (
    <CartProvider>
      <div className="App">
        <LeftPanel></LeftPanel>
        <RightPanel></RightPanel>
      </div>
    </CartProvider>
  );
}
