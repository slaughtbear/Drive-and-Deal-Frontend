function Login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-950">
        <h1 className="text-green-800 font-bold text-3xl mb-6">Login</h1>
        <form className="bg-white p-8 rounded-lg shadow-md w-80">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Nombre</label>
            <input
              type="text"
              placeholder="Ingresa tu Nombre"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Contraseña</label>
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-neutral-800 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
