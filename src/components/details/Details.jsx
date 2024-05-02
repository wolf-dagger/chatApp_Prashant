import "./details.css";
import photo from "../../assets/photo.jpg";
import { auth } from "../../lib/firebase";

const Details = () => {
  return (
    <>
      <div className="detailss">
        <div className="user">
          <img src="./avatar.png" alt="user" />
          <h2>Madara Uhchiah</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="info">
          <div className="options">
            <div className="title">
              <span>Chat Settings</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="options">
            <div className="title">
              <span>Privacy & security</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="options">
            <div className="title">
              <span>Shared Photos</span>
              <img src="./arrowDown.png" alt="" />
            </div>
            <div className="photos">
              <div className="photoItem">
                <div className="photoDetails">
                  <img src={photo} alt="photo" />
                  <span>photo_2022</span>
                </div>
                <img src="./download.png" alt="" className="icon" />
              </div>
              <div className="photoItem">
                <div className="photoDetails">
                  <img src={photo} alt="photo" />
                  <span>photo_2022</span>
                </div>
                <img src="./download.png" alt="" className="icon" />
              </div>
              <div className="photoItem">
                <div className="photoDetails">
                  <img src={photo} alt="photo" />
                  <span>photo_2022</span>
                </div>
                <img src="./download.png" alt="" className="icon" />
              </div>
            </div>
          </div>
          <div className="options">
            <div className="title">
              <span>Shared files</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <button>Block User</button>
          <button className="logout" onClick={()=>auth.signOut()}>Log Out</button>
        </div>
      </div>
    </>
  );
};

export default Details;
