import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { MdBuild } from "react-icons/md";
=======
import { MdBuild, MdDirectionsCar, MdAttachMoney, MdCalendarToday } from "react-icons/md";
>>>>>>> 9a8e5004e4ec6c5cf544bc3899aca2f695c20534

function RepairCard({ repair }) {
  const navigate = useNavigate();

<<<<<<< HEAD
  return (
    <article className="rounded-xl border-2 mt-3 border-neutral-800 bg-neutral-950">
      <div
        key={repair.id}
        className="flex items-start gap-4 p-4 sm:p-6 lg:p-8"
        onClick={() => navigate(`${repair.id}`)}
      >
        <button className="block shrink-0">
          <MdBuild className="size-14 rounded-lg object-cover bg-neutral-800 p-2 text-red-500" />
        </button>

        <div>
          <h3 className="font-medium text-white sm:text-lg hover:underline">
            {repair.description}
          </h3>
          <p className="text-sm text-gray-400">Costo: ${repair.cost}</p>
        </div>
      </div>

      <div className="flex justify-end">
        <strong className="-me-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl bg-red-600 px-3 py-1.5 text-white">
          <span className="text-[10px] font-medium sm:text-xs">Fecha: {repair.date}</span>
        </strong>
      </div>
=======
  // Función para formatear fecha sin librerías externas
  const formatDate = (dateString) => {
    if (!dateString) return "Sin fecha";
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString; // Si hay error, mostrar el valor original
    }
  };

  return (
    <article 
      className="rounded-xl border border-gray-700 bg-neutral-900 overflow-hidden hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/dashboard/repairs/${repair.id}`)}
    >
      <div className="p-5">
        {/* Encabezado con ID */}
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-mono text-gray-400">ID: {repair.id.slice(0, 8)}...</span>
          <div className="bg-red-600/20 p-1 rounded-full">
            <MdBuild className="text-red-400 text-sm" />
          </div>
        </div>

        {/* Información principal */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-red-600/20 p-3 rounded-lg">
            <MdBuild className="text-red-400 text-2xl" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{repair.description}</h3>
            <p className="text-sm text-gray-400 flex items-center">
              <MdDirectionsCar className="mr-2 text-red-400" />
              Auto: {repair.id_car.slice(0, 8)}...
            </p>
          </div>
        </div>

        {/* Detalles adicionales */}
        <div className="grid grid-cols-2 gap-4 border-t border-gray-800 pt-4">
          <div className="flex items-center space-x-2">
            <MdAttachMoney className="text-red-400 text-lg" />
            <div>
              <p className="text-xs text-gray-400">Costo</p>
              <p className="text-white font-medium">
                ${typeof repair.mount === 'number' ? repair.mount.toLocaleString('es-MX', { minimumFractionDigits: 2 }) : repair.mount}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <MdCalendarToday className="text-red-400 text-lg" />
            <div>
              <p className="text-xs text-gray-400">Fecha</p>
              <p className="text-white font-medium">{formatDate(repair.registered_at)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Efecto hover */}
      <div className="h-1 bg-gradient-to-r from-red-500 to-red-600 opacity-0 hover:opacity-100 transition-opacity"></div>
>>>>>>> 9a8e5004e4ec6c5cf544bc3899aca2f695c20534
    </article>
  );
}

<<<<<<< HEAD
export default RepairCard;

=======
export default RepairCard;
>>>>>>> 9a8e5004e4ec6c5cf544bc3899aca2f695c20534
