import { useContext } from 'react';
import { SessionContext } from '../context/SessionProvider'; // Asegúrate de que la ruta es correcta

export const useSession = () => {
  const context = useContext(SessionContext); // Define context correctamente
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};
