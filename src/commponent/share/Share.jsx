import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

function Share() {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img src="/assets/person/1.jpeg" alt="" className="profile-img" />
          <input placeholder="What's on your mind" className="share-input" />
        </div>
        <hr className="share-hr" />
        <div className="share-bottom">
          <div className="share-option">
            <PermMediaIcon htmlColor='tomato' className="share-icon" />
            <span className="share-option-text">Photo or Video</span>
          </div>
          <div className="share-option">
            <LabelIcon htmlColor='blue' className="share-icon" />
            <span className="share-option-text">Tag</span>
          </div>
          <div className="share-option">
            <LocationOnIcon htmlColor='green' className="share-icon" />
            <span className="share-option-text">Location</span>
          </div>
          <div className="share-option">
            <SentimentSatisfiedAltIcon htmlColor='goldenrod' className="share-icon" />
            <span className="share-option-text">Feeling</span>
          </div>
        <button className="share-button">Share</button>
        </div>
      </div>
    </div>
  );
}
export default Share;

