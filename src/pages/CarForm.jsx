import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createCar, deleteCar, fetchCar, updateCar } from "../api/cars";
import { PiCarProfileLight } from "react-icons/pi";
import { MdOutlineDirectionsCar, MdOutlineBuild } from "react-icons/md";
import { FaGasPump, FaCalendarAlt } from "react-icons/fa";

function CarForm() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [avaible, setAvaible] = useState("true");
  const [carState, setCarState] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const carData = {
        brand,
        model,
        year: parseInt(year),
        license_plate: licensePlate,
        avaible: avaible === "true",
        state: carState,
      };

      if (!params.id) {
        await createCar(carData);
      } else {
        await updateCar(params.id, carData);
      }
      navigate("/dashboard/cars");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Error al guardar el auto");
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchCar(params.id)
        .then((res) => {
          const data = res.data;
          setBrand(data.brand || "");
          setModel(data.model || "");
          setYear(data.year?.toString() || "");
          setLicensePlate(data.license_plate || "");
          setAvaible(data.avaible ? "true" : "false");
          setCarState(data.state || "");
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
            <div className="bg-green-600/20 p-3 rounded-lg mr-4">
              <PiCarProfileLight className="text-green-400 text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                {params.id ? "Editar Auto" : "Nuevo Auto"}
              </h1>
              <p className="text-neutral-400 text-sm">
                {params.id ? "Actualiza los detalles del auto" : "Registra un nuevo vehículo en la flota"}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-neutral-800 rounded-lg p-4">
              <label className="flex items-center text-neutral-300 mb-2">
                <MdOutlineDirectionsCar className="mr-2 text-green-400" />
                Marca del Auto
              </label>
              <input
                type="text"
                className="w-full bg-neutral-700 text-white rounded px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
                required
                autoFocus
              />
            </div>

            <div className="bg-neutral-800 rounded-lg p-4">
              <label className="flex items-center text-neutral-300 mb-2">
                <MdOutlineBuild className="mr-2 text-green-400" />
                Modelo
              </label>
              <input
                type="text"
                className="w-full bg-neutral-700 text-white rounded px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                onChange={(e) => setModel(e.target.value)}
                value={model}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-800 rounded-lg p-4">
                <label className="flex items-center text-neutral-300 mb-2">
                  <FaCalendarAlt className="mr-2 text-green-400" />
                  Año
                </label>
                <input
                  type="text"
                  className="w-full bg-neutral-700 text-white rounded px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                      setYear(value);
                    }
                  }}
                  value={year}
                  maxLength="4"
                  placeholder="Ej: 2023"
                />
              </div>

              <div className="bg-neutral-800 rounded-lg p-4">
                <label className="flex items-center text-neutral-300 mb-2">
                  <FaGasPump className="mr-2 text-green-400" />
                  Disponibilidad
                </label>
                <select
                  className="w-full bg-neutral-700 text-white rounded px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  onChange={(e) => setAvaible(e.target.value)}
                  value={avaible}
                >
                  <option value="true">Disponible</option>
                  <option value="false">No disponible</option>
                </select>
              </div>
            </div>

            <div className="bg-neutral-800 rounded-lg p-4">
              <label className="flex items-center text-neutral-300 mb-2">
                <MdOutlineDirectionsCar className="mr-2 text-green-400" />
                Placas
              </label>
              <input
                type="text"
                className="w-full bg-neutral-700 text-white rounded px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                onChange={(e) => setLicensePlate(e.target.value)}
                value={licensePlate}
                placeholder="Ej: ABC-1234"
              />
            </div>

            <div className="bg-neutral-800 rounded-lg p-4">
              <label className="flex items-center text-neutral-300 mb-2">
                <MdOutlineBuild className="mr-2 text-green-400" />
                Estado del Auto
              </label>
              <input
                type="text"
                className="w-full bg-neutral-700 text-white rounded px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                onChange={(e) => setCarState(e.target.value)}
                value={carState}
                placeholder="Ej: Nuevo, Buen estado, Con detalles..."
              />
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => navigate("/dashboard/cars")}
              className="px-6 py-2 border border-neutral-600 text-neutral-300 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Cancelar
            </button>
            
            <div className="flex space-x-3">
              {params.id && (
                <button
                  type="button"
                  onClick={async () => {
                    if (window.confirm("¿Estás seguro de eliminar este auto?")) {
                      try {
                        await deleteCar(params.id);
                        navigate("/dashboard/cars");
                      } catch (error) {
                        console.error("Error al eliminar:", error);
                      }
                    }
                  }}
                  className="px-6 py-2 bg-red-600/90 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Eliminar
                </button>
              )}
              
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                {params.id ? "Guardar cambios" : "Registrar auto"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CarForm;