import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSingUp from "./pages/LoginSignUp";
import Cars from './pages/Cars';
import Customers from './pages/Customers';
import Rentals from './pages/Rentals'

import CarsForm from "./pages/CarForm";
import CustomersForm from "./pages/CustomersForm";
import RentalsForm from "./pages/RentalsForm";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
        <div className="flex container m-auto px-10">
          <Sidebar />
          <Routes>
            {/* <Route path="/" element={<LoginSingUp />}></Route> */}
            <Route path="/dashboard/cars" element={<Cars />}></Route>
            <Route path="/dashboard/cars/:id" element={<CarsForm />}></Route>
            <Route path="/dashboard/cars/add" element={<CarsForm />}></Route>
            <Route path="/dashboard/customers" element={<Customers />}></Route>
            <Route path="/dashboard/customers/:id" element={<CustomersForm />}></Route>
            <Route path="/dashboard/customers/add" element={<CustomersForm />}></Route>
            <Route path="/dashboard/rentals" element={<Rentals />}></Route>
            <Route path="/dashboard/rentals/:id" element={<RentalsForm />}></Route>
            <Route path="/dashboard/rentals/add" element={<RentalsForm />}></Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;