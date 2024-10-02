import "./App.css";
import { HomePages } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./pages/contacts/ContactUs";
import { AddProducts, AdminLayout, Inventory } from "./pages/adminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages></HomePages>}></Route>
        <Route path="contactus" element={<ContactUs></ContactUs>}></Route>
        <Route path="admin" element={<AdminLayout></AdminLayout>}>
          <Route index element={<h1>Admin Page</h1>}></Route>
          <Route path="inventory" element={<Inventory></Inventory>}></Route>
          <Route
            path="addproducts"
            element={<AddProducts></AddProducts>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
