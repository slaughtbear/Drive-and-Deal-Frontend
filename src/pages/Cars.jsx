import { useEffect, useState } from "react";
import CardList from "../components/cars/CarList";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Cars() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCars = async () => {
      const token = localStorage.getItem("token");

      try {
        // Verificar token primero
        const verifyResponse = await fetch(
          `${apiUrl}/api/auth/verify-token/${token}`
        );

        if (!verifyResponse.ok) {
          throw new Error("Token inválido");
        }

        // Obtener los autos con el token en el header
        const carsResponse = await fetch(`${apiUrl}/api/cars`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!carsResponse.ok) {
          throw new Error("Error al obtener autos");
        }

        const carsData = await carsResponse.json();
        setCars(carsData);
      } catch (error) {
        localStorage.removeItem("token");
        navigate("/");
      }
    };

    fetchCars();
  }, [navigate, apiUrl]);

  return (
    <div>
      <div className="mb-8">
        <Link
          to="/dashboard/cars/add"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Registrar auto
        </Link>
      </div>
      <CardList cars={cars} />
    </div>
  );
}

export default Cars;
