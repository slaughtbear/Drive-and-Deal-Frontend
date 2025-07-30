import { useEffect, useState } from "react";
import CardList from "../components/cars/CarList";
import { fetchCars } from "../api/cars";

function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars()
      .then((res) => {
        setCars(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return <CardList cars={cars}/>;
}

export default Cars;