import { useEffect, useState } from "react";
import CustomerList from "../components/customers/CustomerList";
import { fetchCustomers } from "../api/customers";

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers()
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <CustomerList customers={customers} />;
}

export default Customers;
