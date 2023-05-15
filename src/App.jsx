import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import Dashboard from "./components/Dashboard";
import ProductsPage from "./components/pages/ProductsPage";
import DetailsPage from "./components/pages/DetailsPage";
import CategoriesPage from "./components/pages/CategoriesPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path="productos" element={<ProductsPage />} />
          <Route path="detalles" element={<DetailsPage/>} />
          <Route path="categorias" element={<CategoriesPage/>} />
        </Route>
      </Routes>
    </Router>
  );
};