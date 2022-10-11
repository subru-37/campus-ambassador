import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { Navbar, Footer, Loader } from "./components";
import Contact from './components/Contact/Contact';
import { HomePage } from './pages'

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
          <Contact />
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;