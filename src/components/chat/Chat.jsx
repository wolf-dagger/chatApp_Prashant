import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import photo from "../../assets/photo.jpg";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endref = useRef(null);

  useEffect(() => {
    endref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
  };

  return (
    <>
      <div className="chatt">
        <div className="top">
          <div className="user">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <span>Madara</span>
              <p>Lorem, ipsum dolor sit ame</p>
            </div>
          </div>
          <div className="icons">
            <img src="./phone.png" alt="" />
            <img src="./video.png" alt="" />
            <img src="./info.png" alt="" />
          </div>
        </div>
        <div className="center">
          <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
                esse blanditiis voluptatibus officiis perferendis tempora!
              </p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="message own">
            <div className="texts">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
                esse blanditiis voluptatibus officiis perferendis tempora!
              </p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
                esse blanditiis voluptatibus officiis perferendis tempora!
              </p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="message own">
            <div className="texts">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
                esse blanditiis voluptatibus officiis perferendis tempora!
              </p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <img src={photo} alt="tengen uzui" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
                esse blanditiis voluptatibus officiis perferendis tempora!
              </p>
              <span>1 min ago</span>
            </div>
          </div>
          <div ref={endref}></div>
        </div>
        <div className="bottom">
          <div className="icons">
            <img src="./img.png" alt="" />
            <img src="./camera.png" alt="" />
            <img src="./mic.png" alt="" />
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            className="input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="emoji">
            <img
              src="./emoji.png"
              alt=""
              onClick={() => setOpen((prev) => !prev)}
            />
            <div className="picker">
              <EmojiPicker
                open={open}
                theme="dark"
                onEmojiClick={handleEmoji}
              />
            </div>
          </div>
          <button className="sendButton">Send</button>
        </div>
      </div>
    </>
  );
};

export default Chat;
