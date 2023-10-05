import React from 'react';
import newsIcon from './Assets/news.png';
import friendsIcon from './Assets/friends.png';
import groupIcon from './Assets/group.png';
import marketplaceIcon from './Assets/marketplace.png';
import watchIcon from './Assets/watch.png';
import shortcut1Icon from './Assets/shortcut-1.png';
import shortcut2Icon from './Assets/shortcut-2.png';
import shortcut3Icon from './Assets/shortcut-3.png';
import shortcut4Icon from './Assets/shortcut-4.png';

function LeftSidebar() {
  return (
    <div className="leftSideBar">
      <div className="impLinks">
        <a href="#">
          <img src={newsIcon} alt="news" />
          Latest news
        </a>
        <a href="#">
          <img src={friendsIcon} alt="friends" />
          Friends
        </a>
        <a href="#">
          <img src={groupIcon} alt="group" />
          Group
        </a>
        <a href="#">
          <img src={marketplaceIcon} alt="market" />
          Market Place
        </a>
        <a href="#">
          <img src={watchIcon} alt="watch" />
          Watch
        </a>
        <a href="#">See More</a>
      </div>

      <div className="shortcutLinks">
        <p>Your Shortcuts</p>
        <a href="#">
          <img src={shortcut1Icon} alt="news" />
          Web Developers
        </a>
        <a href="#">
          <img src={shortcut2Icon} alt="friends" />
          Web Design Course
        </a>
        <a href="#">
          <img src={shortcut3Icon} alt="group" />
          Full Stack Development
        </a>
        <a href="#">
          <img src={shortcut4Icon} alt="market" />
          Website Experts
        </a>
      </div>
    </div>
  );
}

export default LeftSidebar;
