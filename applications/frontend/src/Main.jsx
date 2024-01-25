import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './app.jsx';
import { RouterProvider } from 'react-router-dom';

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
