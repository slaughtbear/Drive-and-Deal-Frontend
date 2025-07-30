import axios from axios;

const apiUrl = import.meta.env.VITE_API_URL; // url del backend
const endpoint = `${apiUrl}/api/customers` // ruta de la api de clientes

// Obtiene una lista con todos los clientes
export const fetchCustomers = async () => await axios.get(endpoint);

// Obtiene un cliente por id
export const fetchCustomer = async (id) => await axios.get(`/${endpoint}/${id}`);

// Permite registrar un nuevo cliente
export const createCustomer = async (newCustomer) =>
  await axios.post(endpoint, newCustomer);

// Permite actualizar datos de un cliente
export const updateCustomer = async (id, customer) =>
  await axios.put(`${endpoint}/${id}`, customer);

// Permite eliminar un cliente registrado en la bd
export const deleteCustomer = async (id) =>
  await axios.delete(`${endpoint}/${id}`);