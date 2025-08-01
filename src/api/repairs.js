import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL; // url del backend
const endpoint = `${apiUrl}/api/repairs` // ruta de la api de reparaciones

// Obtiene una lista con todos las reparaciones
export const fetchRepairs = async () => await axios.get(endpoint);

// Obtiene una reparación por id
export const fetchRepair = async (id) => await axios.get(`/${endpoint}/${id}`);

// Permite registrar una nueva reparación
export const createRepair = async (newRepair) =>
  await axios.post(endpoint, newRepair);

// Permite actualizar datos de una reparación
export const updateRepair = async (id, repair) =>
  await axios.put(`${endpoint}/${id}`, repair);

// Permite eliminar una reparación registrada en la bd
export const deleteRepair = async (id) =>
  await axios.delete(`${endpoint}/${id}`);