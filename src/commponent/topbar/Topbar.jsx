import React from 'react'
import "../topbar/topbar.css"
import Person4Icon from '@mui/icons-material/Person4';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Link } from "react-router-dom";
function Topbar() {
  return (
    
      <div className='topbar-container'>
       <div className="topbar-left">
       <Link to="/" style={{textDecoration:"none"}}>
        <span className='logo'>Muhammad Ebad</span>
       </Link>
       </div>
       <div className='topbar-center'>
        <div className='search-bar'>
          <SearchIcon className='search-icon'/>
          <input placeholder='Seacrh for friend,post or video' className='search-input' />
        </div>
       </div>
       <div className="topbar-right">
       <div className="topbar-links">
       <span className="topbar-links">Homepage</span>
       <span className="topbar-links">Timeline</span>
       </div>
       <div className="topbar-icons">
       <div className="topbar-icon-item">
       <Person4Icon/>
       <span className='topbar-icon-badge'>1</span>
       </div>
       <div className="topbar-icon-item">
       <NotificationsActiveIcon/>
       <span className='topbar-icon-badge'>2</span>
       </div> 
       <div className="topbar-icon-item">
       <ChatIcon/>
       <span className='topbar-icon-badge'>3</span>
       </div> 
       </div>
       <img src="/assets/person/1.jpeg" alt="" className='topbar-img' />
       </div>
    </div> 
  )
}
  
export default Topbar


