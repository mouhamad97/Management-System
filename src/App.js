
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/Login';
import CreateBill from './pages/CreateBill';
import ClientPage from './pages/clientsPage/ClientPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/CreateBill" element={<CreateBill />}/>
      <Route path="/ClientsPage" element={<ClientPage />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
