import io from "socket.io-client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { message } from "../store/chatSlice";

const socket = io("http://localhost:3001/");
const Chat = () => {
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const chat = useSelector((state) => state?.chat);
  const username = useSelector((state) => state?.user?.name);
  const sendMessage = () => {
    socket.emit("chat", { message: msg, name: username });
    setMsg("");
  };

  useEffect(() => {
    socket.on("chat", (data) => {
      dispatch(message(data));
    });
  }, []);

  return (
    <>
      <h1>Chat room</h1>
      <div>
        {chat?.map((item, id) => (
          <p
            key={id.toString()}
            className={
              username === item?.name ? "text text-left" : "text text-right"
            }
          >
            <span className={username === item?.name ? " capsule you" : " capsule other"}>
              {item.message}
            </span>
          </p>
        ))}
      </div>
      <div className="chatdiv">
        <input
          type="text"
          placeholder="Message...."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  );
};

export default Chat;
