import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createRepair, fetchRepair, updateRepair } from "../api/repairs";
import { MdBuild, MdDescription, MdAttachMoney, MdDateRange, MdSave } from "react-icons/md";

function RepairsForm() {
  const [formData, setFormData] = useState({
    description: "",
    cost: "",
    date: "",
    id_car: ""
  });
  const params = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Validación especial para el campo de costo
    if (name === "cost") {
      if (value === "" || /^\d*\.?\d{0,2}$/.test(value)) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
      return;
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const repairData = {
        description: formData.description,
        mount: parseFloat(formData.cost),
        registered_at: formData.date,
        id_car: formData.id_car
      };

      if (!params.id) {
        await createRepair(repairData);
      } else {
        await updateRepair(params.id, repairData);
      }
      navigate("/dashboard/repairs");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Error al guardar la reparación");
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchRepair(params.id)
        .then((res) => {
          const data = res.data;
          setFormData({
            description: data.description || "",
            cost: data.mount?.toString() || "",
            date: data.registered_at?.substring(0, 10) || "",
            id_car: data.id_car || ""
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
            <div className="bg-red-600/20 p-3 rounded-lg mr-4">
              <MdBuild className="text-red-400 text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                {params.id ? "Editar Reparación" : "Nueva Reparación"}
              </h1>
              <p className="text-neutral-400 text-sm">
                {params.id ? "Actualiza los detalles de la reparación" : "Registra una nueva reparación"}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-neutral-800 rounded-lg p-4">
              <label className="flex items-center text-neutral-300 mb-2">
                <MdDescription className="mr-2 text-red-400" />
                Descripción
              </label>
              <textarea
                name="description"
                className="w-full bg-neutral-700 text-white rounded px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                onChange={handleChange}
                value={formData.description}
                rows="3"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-800 rounded-lg p-4">
                <label className="flex items-center text-neutral-300 mb-2">
                  <MdAttachMoney className="mr-2 text-red-400" />
                  Costo
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-400">$</span>
                  <input
                    type="text"
                    name="cost"
                    className="w-full bg-neutral-700 text-white rounded px-4 py-2 pl-8 focus:ring-2 focus:ring-red-500 focus:outline-none"
                    onChange={handleChange}
                    value={formData.cost}
                    required
                  />
                </div>
              </div>

              <div className="bg-neutral-800 rounded-lg p-4">
                <label className="flex items-center text-neutral-300 mb-2">
                  <MdDateRange className="mr-2 text-red-400" />
                  Fecha
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full bg-neutral-700 text-white rounded px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                  onChange={handleChange}
                  value={formData.date}
                  required
                />
              </div>
            </div>

            {/* <div className="bg-neutral-800 rounded-lg p-4">
              <label className="flex items-center text-neutral-300 mb-2">
                <MdBuild className="mr-2 text-red-400" />
                ID del Auto
              </label>
              <input
                type="text"
                name="id_car"
                className="w-full bg-neutral-700 text-white rounded px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                onChange={handleChange}
                value={formData.id_car}
                required
                placeholder="Ingrese el ID del vehículo"
              />
            </div> */}
          </div>

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => navigate("/dashboard/repairs")}
              className="px-6 py-2 border border-neutral-600 text-neutral-300 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Cancelar
            </button>
            
            <button
              type="submit"
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
            >
              <MdSave className="mr-2" />
              {params.id ? "Guardar cambios" : "Registrar reparación"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RepairsForm;