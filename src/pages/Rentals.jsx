import { useEffect, useState } from "react";
import RentalList from "../components/rentals/RentalList";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Rentals() {
  const [rentals, setRentals] = useState([]);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      
      try {
        // Verificar token primero
        const verifyResponse = await fetch(`${apiUrl}/api/auth/verify-token/${token}`);
        
        if (!verifyResponse.ok) {
          throw new Error('Token inválido');
        }
        
        // Obtener las rentas con el token en el header
        const rentalsResponse = await fetch(`${apiUrl}/api/rentals`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!rentalsResponse.ok) {
          throw new Error('Error al obtener rentas');
        }
        
        const rentalsData = await rentalsResponse.json();
        setRentals(rentalsData);
        
      } catch (error) {
        localStorage.removeItem('token');
        navigate('/');
      }
    };

    fetchData();
  }, [navigate, apiUrl]);

  return (
    <div>
      <div className="mb-8">
        <Link
          to="/dashboard/rentals/add"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Register renta
        </Link>
      </div>
      <RentalList rentals={rentals} />
    </div>
  )
}

export default Rentals;