import React from 'react';
import advertisementImage from './Assets/advertisement.png';

function RightSidebar() {
  return (
    <div className="rightSideBar">
      <div className="rightSideBarTitle">
        <h4>Events</h4>
        <a href="#">See All</a>
      </div>

      <div className="event">
        <div className="leftEvent">
          <h3>27</h3>
          <span>March</span>
        </div>

        <div className="rightEvent">
          <h4>SARATH E K</h4>
          <p>Birthday</p>
          <a href="#">More Info</a>
        </div>
      </div>

      <div className="event">
        <div className="leftEvent">
          <h3>7</h3>
          <span>April</span>
        </div>

        <div className="rightEvent">
          <h4>World Health Day</h4>
          <p>Celebration</p>
          <a href="#">More Info</a>
        </div>
      </div>

      <div className="rightSideBarTitle">
        <h5>Advertisement</h5>
        <a href="#">Close</a>
      </div>
      <img src={advertisementImage} alt="Ads" className="sideBarAds" />

      <div className="rightSideBarTitle">
        <h5>Conversations</h5>
        <a href="#">Hide Chat</a>
      </div>

      <div className="onlineList"></div>
    </div>
  );
}

export default RightSidebar;
