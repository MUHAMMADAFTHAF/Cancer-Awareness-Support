import React from 'react';
import './App.css';
import Landing from './Components/Landing';
import Contact from './Components/Contact';
import Quotes from './Components/Quotes';
import Navbar from './Components/Navbar';
import Timedi from './Components/Timedi';


function App() {
  return (
    <div className="App">
             <Navbar />
             <Landing />
             <Quotes />
             <Timedi />
             <Contact />
    </div>

  );
}

export default App;
