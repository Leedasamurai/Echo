import "./userInfo.css";

const UserInfo = () => {
  return (
    <div className="UserInfo">
      <div className="user">
        <img src="./avatar.png" alt="User avatar" />
        <h2>Massa</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="More options" />
        <img src="./video.png" alt="Video call" />
        <img src="./edit.png" alt="Edit" />
      </div>
    </div>
  );
};

export default UserInfo;
