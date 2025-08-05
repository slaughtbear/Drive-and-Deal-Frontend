import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { FaUser } from "react-icons/fa";
=======
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
>>>>>>> 9a8e5004e4ec6c5cf544bc3899aca2f695c20534

function CustomerCard({ customer }) {
  const navigate = useNavigate();

  return (
<<<<<<< HEAD
    <article className="rounded-xl border-2 mt-3 border-neutral-800 bg-neutral-950">
      <div
        key={customer.id}
        className="flex items-start gap-4 p-4 sm:p-6 lg:p-8"
        onClick={() => navigate(`${customer.id}`)}
      >
        <button className="block shrink-0">
          <FaUser className="size-14 rounded-lg object-cover bg-neutral-800 p-2 text-yellow-500" />
        </button>

        <div>
          <h3 className="font-medium text-white sm:text-lg hover:underline">
            {customer.name}
          </h3>
          <p className="text-sm text-gray-400">Correo: {customer.email}</p>
        </div>
      </div>

      <div className="flex justify-end">
        <strong className="-me-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl bg-yellow-600 px-3 py-1.5 text-white">
          <span className="text-[10px] font-medium sm:text-xs">Tel: {customer.phone}</span>
        </strong>
      </div>
=======
    <article 
      className="rounded-xl border border-gray-700 bg-neutral-900 overflow-hidden hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/dashboard/customers/${customer.id}`)}
    >
      <div className="p-5">
        {/* Encabezado con ID */}
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-mono text-gray-400">ID: {customer.id.slice(0, 8)}...</span>
          <div className="bg-yellow-600/20 p-1 rounded-full">
            <FaUser className="text-yellow-400 text-sm" />
          </div>
        </div>

        {/* Información principal */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-yellow-600/20 p-3 rounded-lg">
            <FaUser className="text-yellow-400 text-2xl" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{customer.name}</h3>
            <p className="text-sm text-gray-400 flex items-center">
              <FaEnvelope className="mr-2 text-yellow-400" />
              {customer.email}
            </p>
          </div>
        </div>

        {/* Detalles adicionales */}
        <div className="grid grid-cols-2 gap-4 border-t border-gray-800 pt-4">
          <div className="flex items-center space-x-2">
            <FaPhone className="text-yellow-400 text-lg" />
            <div>
              <p className="text-xs text-gray-400">Teléfono</p>
              <p className="text-white font-medium">{customer.phone_number}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-yellow-400 text-lg" />
            <div>
              <p className="text-xs text-gray-400">Dirección</p>
              <p className="text-white font-medium truncate" title={customer.address}>
                {customer.address.length > 15 ? `${customer.address.substring(0, 15)}...` : customer.address}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Efecto hover */}
      <div className="h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 hover:opacity-100 transition-opacity"></div>
>>>>>>> 9a8e5004e4ec6c5cf544bc3899aca2f695c20534
    </article>
  );
}

<<<<<<< HEAD
export default CustomerCard;
=======
export default CustomerCard;
>>>>>>> 9a8e5004e4ec6c5cf544bc3899aca2f695c20534
