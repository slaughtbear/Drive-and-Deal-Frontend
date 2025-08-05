import { useNavigate } from "react-router-dom";
import { MdDirectionsCar, MdPerson, MdEvent, MdAttachMoney, MdAssignmentReturn } from "react-icons/md";
import { FaGasPump } from "react-icons/fa";

function RentalCard({ rental }) {
  const navigate = useNavigate();
  
  // Formatear fechas para mejor visualización
  const formatDate = (dateString) => {
    if (!dateString) return "En curso";
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  // Determinar el color según el estado
  const getStatusColor = () => {
    if (rental.returned) return "bg-green-600";
    if (rental.end_date) return "bg-yellow-600";
    return "bg-blue-600";
  };

  return (
    <article 
      className="rounded-xl border border-gray-700 bg-neutral-900 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/dashboard/rentals/${rental.id}`)}
    >
      <div className="p-5">
        {/* Encabezado con ID y estado */}
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-mono text-gray-400">ID: {rental.id.slice(0, 8)}...</span>
          <span className={`${getStatusColor()} text-white text-xs px-2 py-1 rounded-full`}>
            {rental.returned ? "Devuelto" : rental.end_date ? "Finalizado" : "Activo"}
          </span>
        </div>

        {/* Información principal */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <MdPerson className="text-blue-400 text-xl" />
            <div>
              <p className="text-xs text-gray-400">Cliente</p>
              <p className="text-white font-medium">{rental.id_customer.slice(0, 8)}...</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <MdDirectionsCar className="text-blue-400 text-xl" />
            <div>
              <p className="text-xs text-gray-400">Auto</p>
              <p className="text-white font-medium">{rental.id_car.slice(0, 8)}...</p>
            </div>
          </div>
        </div>

        {/* Fechas */}
        <div className="flex items-center space-x-2 mb-4">
          <MdEvent className="text-blue-400 text-xl" />
          <div className="flex-1">
            <p className="text-xs text-gray-400">Periodo de renta</p>
            <div className="flex items-center space-x-2">
              <span className="text-white font-medium">{formatDate(rental.start_date)}</span>
              <span className="text-gray-500">→</span>
              <span className="text-white font-medium">{formatDate(rental.end_date)}</span>
            </div>
          </div>
        </div>

        {/* Detalles adicionales */}
        <div className="grid grid-cols-2 gap-4 border-t border-gray-800 pt-4">
          <div className="flex items-center space-x-2">
            <MdAttachMoney className="text-green-400 text-xl" />
            <div>
              <p className="text-xs text-gray-400">Total</p>
              <p className="text-white font-medium">${rental.total_amount?.toFixed(2)}</p>
            </div>
          </div>

          {rental.returned && (
            <div className="flex items-center space-x-2">
              <MdAssignmentReturn className="text-purple-400 text-xl" />
              <div>
                <p className="text-xs text-gray-400">Estado</p>
                <p className="text-white font-medium">{rental.return_status || "Correcto"}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Efecto hover */}
      <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 hover:opacity-100 transition-opacity"></div>
    </article>
  );
}

export default RentalCard;