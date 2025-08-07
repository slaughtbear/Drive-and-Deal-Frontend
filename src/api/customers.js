import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const endpoint = `${apiUrl}/api/customers`;

// Función para obtener el header con el token
const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
};

// Obtiene una lista con todos los clientes
export const fetchCustomers = async () => await axios.get(endpoint, getAuthHeader());

// Obtiene un cliente por id
export const fetchCustomer = async (id) => await axios.get(`${endpoint}/${id}`, getAuthHeader());

// Permite registrar un nuevo cliente
export const createCustomer = async (newCustomer) =>
  await axios.post(endpoint, newCustomer, getAuthHeader());

// Permite actualizar datos de un cliente
export const updateCustomer = async (id, customer) =>
  await axios.put(`${endpoint}/${id}`, customer, getAuthHeader());

// Permite eliminar un cliente registrado en la bd
export const deleteCustomer = async (id) =>
  await axios.delete(`${endpoint}/${id}`, getAuthHeader());