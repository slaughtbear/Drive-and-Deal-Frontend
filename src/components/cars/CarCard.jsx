import { useNavigate } from "react-router-dom";
import { PiCarProfileLight } from "react-icons/pi";
import { MdOutlineDirectionsCar, MdOutlineCarRental } from "react-icons/md";
import { FaGasPump } from "react-icons/fa";

function CarCard({ car }) {
  const navigate = useNavigate();
  
  // Determinar el color según disponibilidad
  const getStatusColor = () => car.avaible ? "bg-green-600" : "bg-red-600";
  const getStatusText = () => car.avaible ? "Disponible" : "No disponible";
  
  // Formatear año si existe
  const formatYear = (year) => year ? ` · ${year}` : "";

  return (
    <article 
      className="rounded-xl border border-gray-700 bg-neutral-900 overflow-hidden hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/dashboard/cars/${car.id}`)}
    >
      <div className="p-5">
        {/* Encabezado con ID y estado */}
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-mono text-gray-400">ID: {car.id.slice(0, 8)}...</span>
          <span className={`${getStatusColor()} text-white text-xs px-2 py-1 rounded-full`}>
            {getStatusText()}
          </span>
        </div>

        {/* Información principal */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-green-600/20 p-3 rounded-lg">
            <PiCarProfileLight className="text-green-400 text-2xl" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              {`${car.brand} ${car.model}`}
              {formatYear(car.year)}
            </h3>
            <p className="text-sm text-gray-400">{car.license_plate}</p>
          </div>
        </div>

        {/* Detalles adicionales */}
        <div className="grid grid-cols-2 gap-4 border-t border-gray-800 pt-4">
          <div className="flex items-center space-x-2">
            <MdOutlineDirectionsCar className="text-green-400 text-xl" />
            <div>
              <p className="text-xs text-gray-400">Modelo</p>
              <p className="text-white font-medium">{car.model}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <FaGasPump className="text-green-400 text-xl" />
            <div>
              <p className="text-xs text-gray-400">Estado</p>
              <p className="text-white font-medium">{car.state || "Buen estado"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Efecto hover */}
      <div className="h-1 bg-gradient-to-r from-green-500 to-green-600 opacity-0 hover:opacity-100 transition-opacity"></div>
    </article>
  );
}

export default CarCard;