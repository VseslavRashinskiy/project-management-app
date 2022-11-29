import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './component/NotFound';
import React from 'react';
import Header from 'component/Welcom Page/Header';
import { Footer } from 'component/Welcom Page/Footer';
import { SignIn } from 'registration/SignIn';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="login" element={<SignIn />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
