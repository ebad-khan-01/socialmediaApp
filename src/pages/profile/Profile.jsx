import Topbar from "../../commponent/topbar/Topbar";
import Sidebar from "../../commponent/sidebar/Sidebar";
import Rightbar from "../../commponent/rightbar/Rightbar";
import Feed from "../../commponent/feed/Feed";
import "./profile.css";

function Profile() {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img
                src={`${PF}post/3.jpeg`}
                alt=""
                className="profile-coverimg"
              />
                <img
                src={`${PF}person/7.jpeg`}
                alt=""
                className="profile-userimg"
              /> 
            </div>
            <div className="profile-info">
              <h4 className="profile-name">muhammad ebad</h4>
              <span className="profile-desc">hey my friends</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
