import React from 'react';
import Navbar from './components/Navbar';  
import Footer from './components/Footer';  
import { Outlet } from 'react-router-dom';  
import 'font-awesome/css/font-awesome.min.css';
import './index.css';


const App = () => {
  return (
    <div>
      <Navbar />   
      <main>
        <Outlet />  
      </main>
      <Footer />  
    </div>
  );
};

export default App;
