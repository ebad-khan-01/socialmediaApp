import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'

function Rightbar({profile}) {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  const HomeRightBar=()=>{
    return(
      <>
        <div className="birthday-container">
          <img className='birthday-img' src="assets/gift.png" alt="" />
          <span className="birthday-text">
            <b>pola foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbar-ad' src="assets/ad.png" alt="" />
        <h4 className="rightbar-title">online friends</h4>
        <ul className="rightbar-friend-list">
          {Users.map((u)=>(
          <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }
  const ProfileRightBar=()=>{
    return(
      <>
      <h4 className='rightbar-title'>user information</h4>
      <div className="rightbar-info">
        <div className="rightbarinfo-item">
          <span className="rightbarinfo-key">city:</span>
          <span className="rightbarinfo-value">new york</span>
        </div>
        <div className="rightbarinfo-item">
          <span className="rightbarinfo-key">from:</span>
          <span className="rightbarinfo-value">madrid</span>
        </div>
        <div className="rightbarinfo-item">
          <span className="rightbarinfo-key">relationship:</span>
          <span className="rightbarinfo-value">single</span>
        </div>
      </div> 
      <h4 className="rightbar-para">user friends</h4>
      <div className="rightbarfollowings">
      <div className="righbarfollowing">
       <img src={`${PF}person/1.jpeg`} alt="" className="rightbar-img" />
       <span className="rightbar-name">Safak Kocaoglu</span>
      </div>
      <div className="righbarfollowing">
       <img src={`${PF}person/2.jpeg`} alt="" className="rightbar-img" />
       <span className="rightbar-name">Janell Shrum</span>
      </div>
      <div className="righbarfollowing">
       <img src={`${PF}person/3.jpeg`} alt="" className="rightbar-img" />
       <span className="rightbar-name">sophia allen</span>
      </div>
      <div className="righbarfollowing">
       <img src={`${PF}person/4.jpeg`} alt="" className="rightbar-img" />
       <span className="rightbar-name">Dora Hawks</span>
      </div>
      <div className="righbarfollowing">
       <img src={`${PF}person/5.jpeg`} alt="" className="rightbar-img" />
       <span className="rightbar-name">Thomas Holden</span>
      </div>
      <div className="righbarfollowing">
       <img src={`${PF}person/6.jpeg`} alt="" className="rightbar-img" />
       <span className="rightbar-name">Shirley Beauchamp</span>
      </div>
      </div>

      </>
    )
  }
  return (
    <div className='right-bar'>
      <div className="rightbar-wrapper">
      {
      profile ?<ProfileRightBar/>:<HomeRightBar/>
      }
      </div>
    </div>
  )
}

export default Rightbar
