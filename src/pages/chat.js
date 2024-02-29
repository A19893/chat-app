import React, { useEffect, useState } from "react";
import { fetch_chats } from "../services/chats_service";

const Chat = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await fetch_chats();
      setChats(data);
    };
    fetch();
  }, []);
  return (
    <>
      <h1>Chat</h1>
      {chats?.map((item) => {
        return (
          <div key={item._id}>
            <h1>{item.chatName}</h1>
          </div>
        );
      })}
    </>
  );
};

export default Chat;
