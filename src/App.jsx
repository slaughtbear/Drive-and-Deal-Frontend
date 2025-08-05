import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cars from './pages/Cars';
import Customers from './pages/Customers';
import Rentals from './pages/Rentals'
import Repairs from './pages/Repairs'

import CarsForm from "./pages/CarForm";
import CustomersForm from "./pages/CustomersForm";
import RentalsForm from "./pages/RentalsForm";
import RepairsForm from "./pages/RepairsForm"

import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
        <div className="flex container m-auto px-10">
          <Sidebar />
          <Routes>
            <Route path="/dashboard" element={<Login />}></Route>


            <Route path="/dashboard/cars" element={<Cars />}></Route>
            <Route path="/dashboard/cars/:id" element={<CarsForm />}></Route>
            <Route path="/dashboard/cars/add" element={<CarsForm />}></Route>


            <Route path="/dashboard/customers" element={<Customers />}></Route>
            <Route path="/dashboard/customers/:id" element={<CustomersForm />}></Route>
            <Route path="/dashboard/customers/add" element={<CustomersForm />}></Route>


            <Route path="/dashboard/rentals" element={<Rentals />} />
            <Route path="/dashboard/rentals/:id" element={<RentalsForm />} />
            <Route path="/dashboard/rentals/add" element={<RentalsForm />}></Route>


            <Route path="/dashboard/repairs" element={<Repairs />} />
            <Route path="/dashboard/repairs/:id" element={<RepairsForm />} />
            <Route path="/dashboard/repairs/add" element={<RepairsForm />}></Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;

