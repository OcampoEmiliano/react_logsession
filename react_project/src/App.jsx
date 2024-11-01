import React from 'react';
import { useSession } from './hooks/useSession';
import {SessionProvider} from './context/SessionProvider'
import {Login} from './components/Login';
import {Home} from './components/Home';

const Main = () => {
  const { session } = useSession();

  return session ? < Home /> : <Login />;

};

function App () {
  return (
    <SessionProvider>
      <Main/>
      </SessionProvider>
  );
};

export default App;
