import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './component/NotFound';
import React from 'react';
import Header from 'component/Welcom Page/Header';
import { Footer } from 'component/Welcom Page/Footer';
import { SignIn } from 'component/registration/SignIn';
import { Registration } from 'component/registration/Registration';
import { Main } from 'component/Welcom Page/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<Registration />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
