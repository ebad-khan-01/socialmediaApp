import './online.css'

function Online({user}) {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  return (
    <div>
          <li className="rightbar-friend">
            <div className="rightbar-profile-container">
              <img className ="rightbar-profile-img" src={PF+user.profilePicture} alt="" />
              <span className='rightbar-online'></span>
            </div>
            <span className="rightbar-username">{user.username}</span>
          </li>
    </div>
  )
}

export default Online
