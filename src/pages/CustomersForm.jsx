import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createCustomer, deleteCustomer, fetchCustomer, updateCustomer } from "../api/customers";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaSave, FaTrash } from "react-icons/fa";

function CustomersForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    address: ""
  });
  const [errors, setErrors] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres";
    }
    
    if (!formData.email) {
      newErrors.email = "El email es requerido";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    
    if (!formData.phone_number || formData.phone_number.length < 7) {
      newErrors.phone_number = "El teléfono debe tener al menos 7 dígitos";
    }
    
    if (!formData.address || formData.address.length < 5) {
      newErrors.address = "La dirección debe tener al menos 5 caracteres";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    try {
      if (!params.id) {
        await createCustomer(formData);
      } else {
        await updateCustomer(params.id, formData);
      }
      navigate("/dashboard/customers");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Error al guardar el cliente");
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchCustomer(params.id)
        .then((res) => {
          const data = res.data;
          setFormData({
            name: data.name || "",
            email: data.email || "",
            phone_number: data.phone_number || "",
            address: data.address || ""
          });
        })
        .catch((err) => console.error(err));
    }
  }, [params.id]);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] py-8 px-4">
      <div className="w-full max-w-2xl">
        <form 
          className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center mb-6">
            <div className="bg-yellow-600/20 p-3 rounded-lg mr-4">
              <FaUser className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                {params.id ? "Editar Cliente" : "Nuevo Cliente"}
              </h1>
              <p className="text-neutral-400 text-sm">
                {params.id ? "Actualiza los datos del cliente" : "Registra un nuevo cliente en el sistema"}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-neutral-800 rounded-lg p-4">
              <label className="flex items-center text-neutral-300 mb-2">
                <FaUser className="mr-2 text-yellow-400" />
                Nombre completo
              </label>
              <input
                type="text"
                name="name"
                className={`w-full bg-neutral-700 text-white rounded px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none ${
                  errors.name ? "border border-red-500" : ""
                }`}
                onChange={handleChange}
                value={formData.name}
                required
                minLength={3}
                maxLength={50}
                autoFocus
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="bg-neutral-800 rounded-lg p-4">
              <label className="flex items-center text-neutral-300 mb-2">
                <FaEnvelope className="mr-2 text-yellow-400" />
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                className={`w-full bg-neutral-700 text-white rounded px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none ${
                  errors.email ? "border border-red-500" : ""
                }`}
                onChange={handleChange}
                value={formData.email}
                required
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-800 rounded-lg p-4">
                <label className="flex items-center text-neutral-300 mb-2">
                  <FaPhone className="mr-2 text-yellow-400" />
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone_number"
                  className={`w-full bg-neutral-700 text-white rounded px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none ${
                    errors.phone_number ? "border border-red-500" : ""
                  }`}
                  onChange={handleChange}
                  value={formData.phone_number}
                  required
                  minLength={7}
                  maxLength={15}
                />
                {errors.phone_number && <p className="text-red-500 text-xs mt-1">{errors.phone_number}</p>}
              </div>

              <div className="bg-neutral-800 rounded-lg p-4">
                <label className="flex items-center text-neutral-300 mb-2">
                  <FaMapMarkerAlt className="mr-2 text-yellow-400" />
                  Dirección
                </label>
                <input
                  type="text"
                  name="address"
                  className={`w-full bg-neutral-700 text-white rounded px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none ${
                    errors.address ? "border border-red-500" : ""
                  }`}
                  onChange={handleChange}
                  value={formData.address}
                  required
                  minLength={5}
                  maxLength={100}
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => navigate("/dashboard/customers")}
              className="px-6 py-2 border border-neutral-600 text-neutral-300 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Cancelar
            </button>
            
            <div className="flex space-x-3">
              {params.id && (
                <button
                  type="button"
                  onClick={async () => {
                    if (window.confirm("¿Estás seguro de eliminar este cliente?")) {
                      try {
                        await deleteCustomer(params.id);
                        navigate("/dashboard/customers");
                      } catch (error) {
                        console.error("Error al eliminar:", error);
                        alert(error.response?.data?.message || "Error al eliminar el cliente");
                      }
                    }
                  }}
                  className="px-6 py-2 bg-red-600/90 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
                >
                  <FaTrash className="mr-2" />
                  Eliminar
                </button>
              )}
              
              <button
                type="submit"
                className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center"
              >
                <FaSave className="mr-2" />
                {params.id ? "Guardar cambios" : "Registrar cliente"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomersForm;