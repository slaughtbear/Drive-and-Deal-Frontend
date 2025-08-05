import { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Usuarios permitidos
  const validUsers = {
    miechelle: "1234",
    ivan: "5678",
    adrian: "abcd",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = name.trim().toLowerCase();

    if (validUsers[username] && validUsers[username] === password) {
      alert(`Bienvenido, ${name}`);
      setError("");
      // Aquí puedes redirigir si usas react-router: navigate('/dashboard')
    } else {
      setError("Nombre o contraseña incorrectos");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-950">
      <h1 className="text-green-800 font-bold text-3xl mb-6">Login</h1>
      <form className="bg-white p-8 rounded-lg shadow-md w-80" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Nombre</label>
          <input
            type="text"
            placeholder="Ingresa tu Nombre"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Contraseña</label>
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-neutral-800 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;
