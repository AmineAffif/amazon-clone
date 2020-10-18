import React from 'react';
import './css/App.css';
import Header from './Header';
import Home from './Home';
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
