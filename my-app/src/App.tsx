import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './component/NotFound';
import React from 'react';
import Header from 'component/Welcom Page/Header';
import { Footer } from 'component/Welcom Page/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/form" element={<Forms />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
