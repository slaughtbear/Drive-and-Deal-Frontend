import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createCustomer, deleteCustomer, fetchCustomer, updateCustomer } from "../api/customers";

function CustomersForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const customerData = { name, email, phone };

      if (!params.id) {
        await createCustomer(customerData);
      } else {
        await updateCustomer(params.id, customerData);
      }
      navigate("/customers");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchCustomer(params.id)
        .then((res) => {
          const data = res.data;
          setName(data.name || "");
          setEmail(data.email || "");
          setPhone(data.phone || "");
        })
        .catch((err) => console.log(err));
    }
  }, [params.id]);

  return (
    <div className="flex items-center justify-center h-[calc(100vh-10rem)]">
      <div>
        <form className="bg-neutral-950 p-10" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold my-4 text-yellow-500">
            {params.id ? "Actualizar Cliente" : "Registrar Cliente"}
          </h1>

          <input
            type="text"
            placeholder="Nombre"
            className="block py-2 px-3 mb-4 w-full text-black bg-white"
            onChange={(e) => setName(e.target.value)}
            value={name}
            autoFocus
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            className="block py-2 px-3 mb-4 w-full text-black bg-white"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <input
            type="text"
            placeholder="Teléfono"
            className="block py-2 px-3 mb-4 w-full text-black bg-white"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
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
                await deleteCustomer(params.id);
                navigate("/customers");
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

export default CustomersForm;
