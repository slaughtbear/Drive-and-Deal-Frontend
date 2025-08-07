import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cars from './pages/Cars';
import Customers from './pages/Customers';
import Rentals from './pages/Rentals';
import Repairs from './pages/Repairs';

import CarsForm from "./pages/CarForm";
import CustomersForm from "./pages/CustomersForm";
import RentalsForm from "./pages/RentalsForm";
import RepairsForm from "./pages/RepairsForm";

import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta de login sin Sidebar */}
        <Route path="/" element={<Login />} />
        
        {/* Rutas protegidas con Sidebar */}
        <Route path="/dashboard/*" element={
          <div className="flex container m-auto px-10">
            <Sidebar />
            <Routes>
              <Route path="cars" element={<Cars />} />
              <Route path="cars/:id" element={<CarsForm />} />
              <Route path="cars/add" element={<CarsForm />} />

              <Route path="customers" element={<Customers />} />
              <Route path="customers/:id" element={<CustomersForm />} />
              <Route path="customers/add" element={<CustomersForm />} />

              <Route path="rentals" element={<Rentals />} />
              <Route path="rentals/:id" element={<RentalsForm />} />
              <Route path="rentals/add" element={<RentalsForm />} />

              <Route path="repairs" element={<Repairs />} />
              <Route path="repairs/:id" element={<RepairsForm />} />
              <Route path="repairs/add" element={<RepairsForm />} />
            </Routes>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;