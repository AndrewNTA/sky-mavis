import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from 'containers/home';
import SendStep from 'containers/send-step';
import UnlockWallet from 'containers/unlock-wallet';
import store from './configureStore';

import './App.css';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;