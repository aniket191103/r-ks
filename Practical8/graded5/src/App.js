// App.js
import React from 'react';
import './App.css';
import Vehicle from './component/Vehicle';

function App() {
  return (
    <div className="app">
      <Vehicle
        numberOfWheels={4}
        color="red"
        numberOfPassengers={5}
        transmissionType="automatic"
        type="car"
      />
      <Vehicle
        numberOfWheels={2}
        color="blue"
        numberOfPassengers={1}
        transmissionType="manual"
        type="cycle"
      />
    </div>
  );
}

export default App;
