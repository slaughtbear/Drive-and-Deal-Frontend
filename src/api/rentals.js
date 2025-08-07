import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const endpoint = `${apiUrl}/api/rentals`;

// Función para obtener el header con el token
const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
};

// Obtiene una lista con todas las rentas
export const fetchRentals = async () => await axios.get(endpoint, getAuthHeader());

// Obtiene una renta por id
export const fetchRental = async (id) => await axios.get(`${endpoint}/${id}`, getAuthHeader());

// Permite registrar una nueva renta
export const createRental = async (newRental) =>
  await axios.post(endpoint, newRental, getAuthHeader());

// Permite actualizar datos de una renta
export const updateRental = async (id, rental) =>
  await axios.put(`${endpoint}/${id}`, rental, getAuthHeader());

// Permite eliminar una renta registrada en la bd
export const deleteRental = async (id) =>
  await axios.delete(`${endpoint}/${id}`, getAuthHeader());