import React from 'react';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Sidebar from './Components/Sidebar';
import Twin from './Components/Twin';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="layout-wrapper">
      <div className="container">
        <Header />
        <MainContent />
        <Sidebar />
        <Twin />
        <Twin />
        <Footer />
      </div>
    </div>
  );
}

export default App;
