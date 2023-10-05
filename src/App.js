import React from 'react';
import './App.css';
import fbLogo from './fblogo.svg';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import notificationIcon from './Assets/notification.png';
import inboxIcon from './Assets/inbox.png';
import videoIcon from './Assets/video.png';
import searchIcon from './Assets/search.png';
import profilePic from './Assets/profile-pic.png';


function App() {
  return (
    <div>
      <nav>
        <div className="leftNavBar">
          <img src={fbLogo} alt="fblogo" className="fblogo" />
          <ul>
            <li>
              <img src={notificationIcon} alt="notifications" className="notification" />
            </li>
            <li>
              <img src={inboxIcon} alt="inboxs" className="inbox" />
            </li>
            <li>
              <img src={videoIcon} alt="videos" className="video" />
            </li>
          </ul>
        </div>
        <div className="rightNavBar">
          <div className="searchBox">
            <img src={searchIcon} alt="search" className="search" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="navUserIcon online">
            <img src={profilePic} alt="profilePic" />
          </div>
        </div>
      </nav>

      <div className="container">
        <LeftSidebar />
        <div className="MiddleBar"></div>
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
