import React, { useState } from 'react'
import { Routes, Route, NavLink } from "react-router-dom"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import Detail from './pages/Detail page'
import Edit from './pages/Edit page';
import AddPage from './pages/Add page';
// import NavbarBootstrap from './components/NavbarBootstrap';

function App() {

  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Products />}></Route>
          <Route path="detail/:id" element={<Detail />}></Route>
          <Route path="edit/:id" element={<Edit />}></Route>
          <Route path="add/" element={<AddPage />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
