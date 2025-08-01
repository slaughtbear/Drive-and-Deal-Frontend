import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createRepair, deleteRepair, fetchRepair, updateRepair } from "../api/repairs";

function RepairsForm() {
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const repairData = {
        description,
        cost: parseFloat(cost),
        date
      };

      if (!params.id) {
        await createRepair(repairData);
      } else {
        await updateRepair(params.id, repairData);
      }
      navigate("/repairs");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchRepair(params.id)
        .then((res) => {
          const data = res.data;
          setDescription(data.description || "");
          setCost(data.cost?.toString() || "");
          setDate(data.date || "");
        })
        .catch((err) => console.log(err));
    }
  }, [params.id]);

  return (
    <div className="flex items-center justify-center h-[calc(100vh-10rem)]">
      <div>
        <form className="bg-neutral-950 p-10" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold my-4 text-red-500">
            {params.id ? "Actualizar Reparación" : "Registrar Reparación"}
          </h1>

          <input
            type="text"
            placeholder="Descripción"
            className="block py-2 px-3 mb-4 w-full text-black bg-white"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            autoFocus
          />

          <input
            type="text"
            placeholder="Costo"
            className="block py-2 px-3 mb-4 w-full text-black bg-white"
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*\.?\d*$/.test(value)) {
                setCost(value);
              }
            }}
            value={cost}
          />

          <input
            type="date"
            placeholder="Fecha"
            className="block py-2 px-3 mb-4 w-full text-black bg-white"
            onChange={(e) => setDate(e.target.value)}
            value={date}
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
                await deleteRepair(params.id);
                navigate("/repairs");
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

export default RepairsForm;
