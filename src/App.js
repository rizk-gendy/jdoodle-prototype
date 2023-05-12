import React from 'react';
import './App.css';
import { Footer, NavBar } from './components';
import Home from './pages/HomePage/Home';

function App() {
  return (
    <div className='gradient-background'>
      <NavBar />
      <Home/>
      <Footer />
    </div>
  );
}

export default App;