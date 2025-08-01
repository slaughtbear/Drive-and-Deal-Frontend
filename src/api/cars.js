import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL; // url del backend
const endpoint = `${apiUrl}/api/cars`; // ruta de la api de autos

// Obtiene una lista con todos los autos
export const fetchCars = async () => await axios.get(endpoint);

// Obtiene un auto por id
export const fetchCar = async (id) => await axios.get(`${endpoint}/${id}`);

// Permite registrar un nuevo auto
export const createCar = async (newCar) =>
  await axios.post(endpoint, newCar);

// Permite actualizar datos de un auto
export const updateCar = async (id, car) =>
  await axios.put(`${endpoint}/${id}`, car);

// Permite eliminar un auto registrado en la bd
export const deleteCar = async (id) =>
  await axios.delete(`${endpoint}/${id}`);
