import React from 'react';
import './App.css';
import ControlProvider from './hooks/useControl/provider';
import Register from './screens/Register';

function App() {
  return (
    <div className="App">
      <ControlProvider>
        <Register />
      </ControlProvider>
    </div>
  );
}

export default App;
