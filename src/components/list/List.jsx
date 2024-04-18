import UserInfo from "./UserInfo/UserInfo";
import ChatList from "./chatList/ChatList";
import "./list.css";

const List = () => {
  return (
    <>
      <div className="listt">
        <UserInfo />
        <ChatList />
      </div>
    </>
  );
};

export default List;
