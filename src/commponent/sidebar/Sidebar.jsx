import React from 'react'
import "../sidebar/sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PeopleIcon from '@mui/icons-material/People';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import TodayIcon from '@mui/icons-material/Today';
import SchoolIcon from '@mui/icons-material/School';
import Closefriend from '../closefriend/Closefriend';
import { Users } from '../../dummyData';

function Sidebar() {
  return (
    <div className='side-bar'>
      <div className="sidebar-wrappers">
        <ul className="sidebar-list">
          <li className='sidebar-list-item'>
            <RssFeedIcon className='sidebar-icon'/>
            <span className='sidebar-item-text'>feed</span>
          </li>
              <li className='sidebar-list-item'>
            <ChatIcon className='sidebar-icon'/>
            <span className='sidebar-item-text'>chat</span>
          </li>
              <li className='sidebar-list-item'>
            <PlayCircleIcon className='sidebar-icon'/>
            <span className='sidebar-item-text'>vedio</span>
          </li>
          <li className='sidebar-list-item'>
            <PeopleIcon className='sidebar-icon'/>
            <span className='sidebar-item-text'>people</span>
          </li>
          <li className='sidebar-list-item'>
            <BookmarksIcon className='sidebar-icon'/>
            <span className='sidebar-item-text'>books</span>
          </li>
          <li className='sidebar-list-item'>
            <HelpIcon className='sidebar-icon'/>
            <span className='sidebar-item-text'>help</span>
          </li>
          <li className='sidebar-list-item'>
            <WorkIcon className='sidebar-icon'/>
            <span className='sidebar-item-text'>working</span>
          </li>
          <li className='sidebar-list-item'>
            <TodayIcon className='sidebar-icon'/>
            <span className='sidebar-item-text'>event</span>
          </li>
          <li className='sidebar-list-item'>
            <SchoolIcon className='sidebar-icon'/>
            <span className='sidebar-item-text'>school</span>
          </li>
        </ul>
        <button className="sidebar-button">show more</button>
        <hr className="sidebar-hr" />
        <ul className="sidebar-friends-list">
          {
            Users.map((u)=>(
            <Closefriend key={u.id} user={u}/>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
