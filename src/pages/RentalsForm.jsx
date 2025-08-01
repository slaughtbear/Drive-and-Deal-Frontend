import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createRental, deleteRental, fetchRental, updateRental } from "../api/rentals";

function RentalForm() {
  const [clientName, setClientName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
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
      </div>
    </div>
  );
}

export default RentalForm;
