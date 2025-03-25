// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header from './components/header.js';
import Hero from './components/hero.js';
import Browse from './components/browse.js';
import Arrived from './components/arrived.js';
import Clients from './components/clients.js';
import AssideMenu from './components/assideMenu.js';
import Footer from './components/footer.js';
function App() {
  return (
    <>
    <Header />
    <Hero />
    <Browse />
    <Arrived />
    <Clients />
    <AssideMenu />
    <Footer />
    </>
  );
}

export default App;
