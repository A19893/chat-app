import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import { ChatBox, SideDrawer } from "../components/miscellaneous";
import MyChats from "../components/myChats";

const Chat = () => {
  const {user} = useSelector((state)=> state.user)
  const[fetchAgain , setFetchAgain] = useState(false);
  return (
    <div style={{ width: "100%"}}>
      {user && <SideDrawer/>}
      <Box display="flex" justifyContent="space-between" w='100%' h='91.5vh'>
        {user && <MyChats fetchAgain={fetchAgain}/>}
        {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>}
      </Box>
    </div>
  );
};

export default Chat;
