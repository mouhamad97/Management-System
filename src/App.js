
import './App.css';
import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/Login';
import CreateBill from './pages/CreateBill';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/CreateBill" element={<CreateBill />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
