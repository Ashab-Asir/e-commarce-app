import "./App.css";
import { CartProvider } from "./contexts";
import { LeftPanel, RightPanel } from "./components/";
function App() {
  return (
    <CartProvider>
      <div className="App">
        <LeftPanel></LeftPanel>
        <RightPanel></RightPanel>
      </div>
    </CartProvider>
  );
}

export default App;
