import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createRental, deleteRental, fetchRental, updateRental } from "../api/rentals";
import { createRental, fetchRental, updateRental } from "../api/rentals";
import { MdPerson, MdDirectionsCar, MdEvent, MdAttachMoney, MdAssignmentReturn } from "react-icons/md";


function RentalForm() {
  const [clientName, setClientName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");




function RentalForm() {
  const [id_customer, setIdCustomer] = useState("");
  const [id_car, setIdCar] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [total_amount, setTotalAmount] = useState("");
  const [returned, setReturned] = useState(false);
  const [return_status, setReturnStatus] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const rentalData = {
        clientName,
        carModel,
        startDate,
        endDate,
      };

      if (!params.id) {
        const response = await createRental(rentalData);
        console.log(response);
      } else {
        const response = await updateRental(params.id, rentalData);
        console.log(response);
      }
      navigate("/rentals"); // ajusta si tu ruta de listado es diferente
    } catch (error) {
      console.log(error);
      const rentalData = params.id
        ? {
            end_date: end_date ? new Date(end_date).toISOString() : null,
            total_amount: total_amount ? parseFloat(total_amount) : null,
            returned,
            return_status: return_status || null,
          }
        : {
            id_customer,
            id_car,
            start_date: new Date(start_date).toISOString(),
            total_amount: parseFloat(total_amount),
          };

      if (!params.id) {
        await createRental(entalData);
      } else {
        await updateRental(params.id, rentalData);
      }
      navigate("/dashboard/rentals");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Error al guardar la renta");
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchRental(params.id)
        .then((res) => {
          const data = res.data;
          setClientName(data.clientName || "");
          setCarModel(data.carModel || "");
          setStartDate(data.startDate ? data.startDate.substring(0, 10) : "");
          setEndDate(data.endDate ? data.endDate.substring(0, 10) : "");
        })
        .catch((err) => console.log(err));
          setIdCustomer(data.id_customer || "");
          setIdCar(data.id_car || "");
          setStartDate(data.start_date?.substring(0, 10) || "");
          setEndDate(data.end_date?.substring(0, 10) || "");
          setTotalAmount(data.total_amount?.toString() || "");
          setReturned(data.returned || false);
          setReturnStatus(data.return_status || "");
        })
        .catch((err) => console.error(err));
    }
  }, [params.id]);

  return (
    <div className="flex items-center justify-center h-[calc(100vh-10rem)]">
      <div>
        <form className="bg-neutral-950 p-10" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold my-4 text-blue-500">
            {params.id ? "Actualizar Renta" : "Registrar Renta"}
          </h1>

          <input
            type="text"
            placeholder="Nombre del cliente"
            className="block py-2 px-3 mb-4 w-full text-black bg-white"
            onChange={(e) => setClientName(e.target.value)}
            value={clientName}
            autoFocus
          />

          <input
            type="text"
            placeholder="Modelo del auto"
            className="block py-2 px-3 mb-4 w-full text-black bg-white"
            onChange={(e) => setCarModel(e.target.value)}
            value={carModel}
          />

          <input
            type="date"
            placeholder="Fecha inicio"
            className="block py-2 px-3 mb-4 w-full text-black bg-white"
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
          />

          <input
            type="date"
            placeholder="Fecha fin"
            className="block py-2 px-3 mb-4 w-full text-black bg-white"
            onChange={(e) => setEndDate(e.target.value)}
            value={endDate}
          />

          <button className="bg-white text-slate-800 hover:bg-slate-800 hover:text-white py-2 px-4 rounded">
            {params.id ? "Actualizar" : "Registrar"}
          </button>
        </form>

        {params.id && (
          <button
            className="bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-5"
            onClick={async () => {
              try {
                const response = await deleteRental(params.id);
                console.log(response);
                navigate("/rentals");
              } catch (error) {
                console.log(error);
              }
            }}
          >
            Eliminar
          </button>
        )}
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] py-8 px-4">
      <div className="w-full max-w-2xl">
        <form
          className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center mb-6">
            <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
              <MdDirectionsCar className="text-blue-400 text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                {params.id ? "Editar Renta" : "Nueva Renta"}
              </h1>
              <p className="text-neutral-400 text-sm">
                {params.id
                  ? "Actualiza los detalles de la renta"
                  : "Completa los datos para registrar una nueva renta"}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {!params.id && (
              <>
                <div className="bg-neutral-800 rounded-lg p-4">
                  <label className="flex items-center text-neutral-300 mb-2">
                    <MdPerson className="mr-2 text-blue-400" />
                    ID del Cliente
                  </label>
                  <input
                    type="text"
                    className="w-full bg-neutral-700 text-white rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    onChange={(e) => setIdCustomer(e.target.value)}
                    value={id_customer}
                    required
                    autoFocus
                  />
                </div>

                <div className="bg-neutral-800 rounded-lg p-4">
                  <label className="flex items-center text-neutral-300 mb-2">
                    <MdDirectionsCar className="mr-2 text-blue-400" />
                    ID del Auto
                  </label>
                  <input
                    type="text"
                    className="w-full bg-neutral-700 text-white rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    onChange={(e) => setIdCar(e.target.value)}
                    value={id_car}
                    required
                  />
                </div>
              </>
            )}

            <div className="bg-neutral-800 rounded-lg p-4">
              <label className="flex items-center text-neutral-300 mb-2">
                <MdEvent className="mr-2 text-blue-400" />
                {!params.id ? "Fecha de inicio" : "Fecha de finalización"}
              </label>
              <input
                type="date"
                className="w-full bg-neutral-700 text-white rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) =>
                  !params.id
                    ? setStartDate(e.target.value)
                    : setEndDate(e.target.value)
                }
                value={!params.id ? start_date : end_date}
                required={!params.id}
              />
            </div>

            <div className="bg-neutral-800 rounded-lg p-4">
              <label className="flex items-center text-neutral-300 mb-2">
                <MdAttachMoney className="mr-2 text-blue-400" />
                Monto total
              </label>
              <input
                type="number"
                step="0.01"
                className="w-full bg-neutral-700 text-white rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) => setTotalAmount(e.target.value)}
                value={total_amount}
                required={!params.id}
              />
            </div>

            {params.id && (
              <>
                <div className="bg-neutral-800 rounded-lg p-4">
                  <label className="flex items-center text-neutral-300 mb-2">
                    <MdAssignmentReturn className="mr-2 text-blue-400" />
                    Estado de devolución
                  </label>
                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      id="returned"
                      className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                      onChange={(e) => setReturned(e.target.checked)}
                      checked={returned}
                    />
                    <label htmlFor="returned" className="ml-2 text-neutral-300">
                      Auto devuelto
                    </label>
                  </div>
                  {returned && (
                    <input
                      type="text"
                      placeholder="Detalles del estado (ej: 'Con daños menores')"
                      className="w-full bg-neutral-700 text-white rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      onChange={(e) => setReturnStatus(e.target.value)}
                      value={return_status}
                    />
                  )}
                </div>
              </>
            )}
          </div>

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => navigate("/dashboard/rentals")}
              className="px-6 py-2 border border-neutral-600 text-neutral-300 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {params.id ? "Guardar cambios" : "Crear renta"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RentalForm;
