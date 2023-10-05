import React from 'react';
import './App.css';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Header from './Header';

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
