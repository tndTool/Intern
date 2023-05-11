import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Products from "./components/Products";
import Laptop from "./components/Laptop";
import Desktop from "./components/Desktop";
import Customers from "./components/Customers";
import NoMatch from "./components/NoMatch";

export default function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 bg-dark min-height-100vh">
          <Sidebar />
        </div>
        <main className="col-md-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />}>
              <Route path="laptop" element={<Laptop />} />
              <Route path="desktop" element={<Desktop />} />
            </Route>
            <Route path="/customers" element={<Customers />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
