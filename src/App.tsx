import React from 'react';
import { AuthProvider } from './hooks/auth';
import Routes from './routes';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
