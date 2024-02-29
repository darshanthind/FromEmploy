import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Inputs from './pages/form';
import Layout from './pages/header';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Edit from './pages/edit';
import Delete from './pages/delete';
import Table from './pages/table';
import TTable from './pages/table';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index  element={<Inputs/>}/>
      <Route path="/table" element={<TTable/>}/>
      <Route path='/delete' element={<Delete/>}/>
      <Route path='/Edit' element={<Edit/>}/> 
    </Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
