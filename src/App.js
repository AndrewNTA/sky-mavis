import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from 'containers/home';
import SendStep from 'containers/send-step';
import UnlockWallet from 'containers/unlock-wallet';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="app-main-view">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="send-step" exact element={<SendStep />} />
            <Route path="unlock-wallet" exact element={<UnlockWallet />} />
          </Routes>
        </div>
        <div className="app-overlay" />
      </div>
    </BrowserRouter>
  );
}

export default App;