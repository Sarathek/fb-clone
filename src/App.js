import React from 'react';
import './App.css';
import LeftSidebar from './Components/LeftSidebar';
import RightSidebar from './Components/RightSidebar';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <LeftSidebar />
        <div className="MiddleBar"></div>
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
