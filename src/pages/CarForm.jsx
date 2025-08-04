import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createCar, deleteCar, fetchCar, updateCar } from "../api/cars";

function CarForm() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [avaible, setAvaible] = useState("true"); // como string para usar en <select>
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
        const response = await createCar(carData);
        console.log(response);
      } else {
        const response = await updateCar(params.id, carData);
        console.log(response);
      }
      e.target.reset();
      navigate("/dashboard/cars");
    } catch (error) {
      console.log(error);
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
          setAvaible(data.avaible  ? "true" : "false");
          setCarState(data.state || "");
        })
        .catch((err) => console.log(err));
    }
  }, [params.id]);

  return (
    <div className="flex items-center justify-center h-[calc(100vh-10rem)]">
      <div>
        <form className="bg-neutral-950 p-10" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold my-4 text-green-500">
            {params.id ? "Actualizar Auto" : "Registrar Auto"}
          </h1>

          <input
            type="text"
            placeholder="Marca"
            className="block py-2 px-3 mb-4 w-full text-black bg-white"
            onChange={(e) => setBrand(e.target.value)}
            value={brand}
            autoFocus
          />

          <input
            type="text"
            placeholder="Modelo"
            className="block py-2 px-3 mb-4 w-full text-black bg-white"
            onChange={(e) => setModel(e.target.value)}
            value={model}
          />

          <input
            type="text"
            placeholder="Año"
            className="block py-2 px-3 mb-4 w-full text-black bg-white"
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setYear(value);
              }
            }}
            value={year}
            maxLength="4"
          />

          <input
            type="text"
            placeholder="Placas"
            className="block py-2 px-3 mb-4 w-full text-black bg-white"
            onChange={(e) => setLicensePlate(e.target.value)}
            value={licensePlate}
          />

          <select
            className="block py-2 px-3 mb-4 w-full text-black bg-white"
            onChange={(e) => setAvaible(e.target.value)}
            value={avaible}
          >
            <option value="true">Disponible</option>
            <option value="false">No disponible</option>
          </select>

          <input
            type="text"
            placeholder="Estado del auto"
            className="block py-2 px-3 mb-4 w-full text-black bg-white"
            onChange={(e) => setCarState(e.target.value)}
            value={carState}
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
                const response = await deleteCar(params.id);
                console.log(response);
                navigate("/");
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

export default CarForm;
