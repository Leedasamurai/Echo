import "./chatList.css";

const ChatList = () => {
  return (
    <div className="ChatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
          <img src="./plus.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChatList;
