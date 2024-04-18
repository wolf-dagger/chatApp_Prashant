import "./userInfo.css";
const UserInfo = () => {
  return (
    <>
      <div className="userInfoo">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <h2>Wolf Sharma</h2>
        </div>
        <div className="icons">
          <img src="./more.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./edit.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default UserInfo;
