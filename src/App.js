import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Home from 'containers/home';
import SendStep from 'containers/send-step';
import UnlockWallet from 'containers/unlock-wallet';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="nav-menu">
        <span className="nav-item">
          <Link to="/">Home</Link>
        </span>
        <span className="nav-item">
          <Link to="send-step">Send Step</Link>
        </span>
        <span className="nav-item">
          <Link to="unlock-wallet">Unlock Wallet</Link>
        </span>
      </nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="send-step" exact element={<SendStep />} />
        <Route path="unlock-wallet" exact element={<UnlockWallet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;