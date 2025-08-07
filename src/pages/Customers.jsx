import { useEffect, useState } from "react";
import CustomerList from "../components/customers/CustomerList";
import { useNavigate } from 'react-router-dom';

function Customers() {
  const [customers, setCustomers] = useState([]);
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
        
        // Obtener los clientes con el token en el header
        const customersResponse = await fetch(`${apiUrl}/api/customers`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!customersResponse.ok) {
          throw new Error('Error al obtener clientes');
        }
        
        const customersData = await customersResponse.json();
        setCustomers(customersData);
        
      } catch (error) {
        localStorage.removeItem('token');
        navigate('/');
      }
    };

    fetchData();
  }, [navigate, apiUrl]);

  return <CustomerList customers={customers} />;
}

export default Customers;