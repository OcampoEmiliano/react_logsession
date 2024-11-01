import React from 'react';
import { useSession } from '../hooks/useSession';

export const Home = () => {
  // Obtener información de sesión y función de logout
  const { session, logout } = useSession();

  return (
    <div className="home-container flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">Bienvenido, {session?.user || 'Usuario'}</h1>
        <br />
        <button 
          onClick={logout}
          className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};
