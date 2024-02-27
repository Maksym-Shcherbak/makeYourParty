import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from '../src/App.jsx';
import '../src/css/reset.css';
import { persistor, store } from '../src/redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/makeYourParty">
          <App />
          <ToastContainer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
