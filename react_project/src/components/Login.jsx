import React, { useState } from 'react';
import { useSession } from '../hooks/useSession';

export const Login = () => {
  // Estados para credenciales
  const [credentials, setCredentials] = useState({
    user: '',
    password: ''
  });

  // Obtener funciones de sesión
  const { login, loading, error } = useSession();

  // Manejar cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejar submit de formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
  };

  return (
 
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <h2 className="mb-4 text-2xl font-bold text-center">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="user">
              Usuario
            </label>
            <input
              type="text"
              id="user"
              name="user"
              value={credentials.user}
              onChange={handleChange}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Iniciar Sesión'}
          </button>
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
};
