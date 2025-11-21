import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Layout from './layout';
import Videos from './videos';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
      </Route>
    </Routes>
  );
}
