import "./closefriend.css";

function Closefriend({ user }) {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;

  // Fallback image in case profilePicture is not available
  const profilePicture = user.profilePicture ? PF + user.profilePicture : `${PF}default-profile.png`;

  return (
    <li className="sidebar-friend">
      <img className="sidebar-friend-img" src={profilePicture} alt="friend profile" />
      <span className="sidebar-friend-name">{user.username}</span>
    </li>
  );
}

export default Closefriend;
