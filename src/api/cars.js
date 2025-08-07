import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const endpoint = `${apiUrl}/api/cars`;

// Función para obtener el token
const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
};

// Obtiene una lista con todos los autos
export const fetchCars = async () => await axios.get(endpoint, getAuthHeader());

// Obtiene un auto por id
export const fetchCar = async (id) => await axios.get(`${endpoint}/${id}`, getAuthHeader());

// Permite registrar un nuevo auto
export const createCar = async (newCar) => 
  await axios.post(endpoint, newCar, getAuthHeader());

// Permite actualizar datos de un auto
export const updateCar = async (id, car) => 
  await axios.put(`${endpoint}/${id}`, car, getAuthHeader());

// Permite eliminar un auto registrado en la bd
export const deleteCar = async (id) => 
  await axios.delete(`${endpoint}/${id}`, getAuthHeader());