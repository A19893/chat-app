import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import { ChatBox, SideDrawer } from "../components/miscellaneous";
import MyChats from "../components/myChats";

const Chat = () => {
  const {user} = useSelector((state)=> state.user)
  return (
    <div style={{ width: "100%"}}>
      {user && <SideDrawer/>}
      <Box display="flex" justifyContent="space-between" w='100%' h='91.5vh'>
        {user && <MyChats/>}
        {user && <ChatBox/>}
      </Box>
    </div>
  );
};

export default Chat;
