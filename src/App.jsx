import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Layout from './layout';
import Videos from './videos';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
