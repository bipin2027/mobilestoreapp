import React from 'react';
import './App.css';
import MobileStore from './Components/MobileStoreComponent';
import'bootstrap/dist/css/bootstrap.css';
import {ContextProvider} from './Components/Context/UserContext.jsx'


function App() {
  return (
    <div className="App">
      <ContextProvider>
      <MobileStore/>
      </ContextProvider>
    </div>
  );
}

export default App;
