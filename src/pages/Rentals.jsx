import { useEffect, useState } from "react";
import RentalList from "../components/rentals/RentalList";
import { fetchRentals } from "../api/rentals";

function Rentals() {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    fetchRentals()
      .then((res) => {
        setRentals(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <RentalList rentals={rentals} />;
}

export default Rentals;