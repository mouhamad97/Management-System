
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Transaction from './pages/Transaction/Transaction.jsx'
import Maintenance from './pages/Maintenance/Maintenance.jsx'
import ClientPage from './pages/clientsPage/ClientPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>

        <Route path="/" element={<Login />}/>
        <Route path="/clients" element={<ClientPage/>}/>
        <Route path="/Transactions" element={<Transaction/>}/>
        <Route path="/Maintenance" element={<Maintenance />}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
