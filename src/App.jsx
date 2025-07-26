import { useState } from 'react'
import React from 'react'
import './App.css'
import Home from './Home.jsx'
import You from './You.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/you" element={<You />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App