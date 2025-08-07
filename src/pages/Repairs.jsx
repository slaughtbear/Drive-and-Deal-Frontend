import { useEffect, useState } from "react";
import RepairList from "../components/repairs/RepairList";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Repairs() {
  const [repairs, setRepairs] = useState([]);
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
        
        // Obtener las reparaciones con el token en el header
        const repairsResponse = await fetch(`${apiUrl}/api/repairs`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!repairsResponse.ok) {
          throw new Error('Error al obtener reparaciones');
        }
        
        const repairsData = await repairsResponse.json();
        setRepairs(repairsData);
        
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
          to="/dashboard/repairs/add"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Registrar reparación
        </Link>
      </div>
      <RepairList repairs={repairs} />
    </div>
  )
}

export default Repairs;