import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const endpoint = `${apiUrl}/api/repairs`;

// Función para obtener el header con el token
const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
};

// Obtiene una lista con todas las reparaciones
export const fetchRepairs = async () => await axios.get(endpoint, getAuthHeader());

// Obtiene una reparación por id
export const fetchRepair = async (id) => await axios.get(`${endpoint}/${id}`, getAuthHeader());

// Permite registrar una nueva reparación
export const createRepair = async (newRepair) =>
  await axios.post(endpoint, newRepair, getAuthHeader());

// Permite actualizar datos de una reparación
export const updateRepair = async (id, repair) =>
  await axios.put(`${endpoint}/${id}`, repair, getAuthHeader());

// Permite eliminar una reparación registrada en la bd
export const deleteRepair = async (id) =>
  await axios.delete(`${endpoint}/${id}`, getAuthHeader());