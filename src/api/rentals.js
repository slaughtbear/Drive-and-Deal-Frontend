import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL; // url del backend
const endpoint = `${apiUrl}/api/rentals` // ruta de la api de rentas

// Obtiene una lista con todas los rentas
export const fetchRentals = async () => await axios.get(endpoint);

// Obtiene una renta por id
export const fetchRental = async (id) => await axios.get(`${endpoint}/${id}`);

// Permite registrar una nueva renta
export const createRental = async (newRental) =>
  await axios.post(endpoint, newRental);

// Permite actualizar datos de una renta
export const updateRental = async (id, rental) =>
  await axios.put(`${endpoint}/${id}`, rental);

// Permite eliminar una renta registrada en la bd
export const deleteRental = async (id) =>
  await axios.delete(`${endpoint}/${id}`);