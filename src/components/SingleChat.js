import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedChat,
  removeSelectedChat,
} from "../features/chats/chats.slice";
import { getSender, getSenderFull } from "../config/chatLogics";
import ProfileModal from "./miscellaneous/profileModal";
import UpdateGroupChatModel from "./miscellaneous/updateGroupChatModel";

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const { user } = useSelector((state) => state.user);
  const { selectedChat } = useSelector((state) => state.chats);
  const dispatch = useDispatch();
  return (
    <>
      {selectedChat ? (
        <>
          <Text
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            fontFamily="Work sans"
            display="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
          >
            <IconButton
              d={{ base: "flex", md: "none" }}
              icon={<ArrowBackIcon />}
              onClick={() => dispatch(removeSelectedChat())}
            />
             {!selectedChat.isGroupChat ? (
             <>
             {getSender(user, selectedChat.users)}
                  <ProfileModal
                    user={getSenderFull(user, selectedChat.users)}
              />
             </>
             ) : (
             <>
              {selectedChat.chatName.toUpperCase()}
                  <UpdateGroupChatModel
                    // fetchMessages={fetchMessages}
                    fetchAgain={fetchAgain}
                    setFetchAgain={setFetchAgain}
                  />
              </>
              )}
          </Text>
          <Box
          display="flex"
          flexDir="column"
          justifyContent="flex-end"
          p={3}
          bg="#E8E8E8"
          w="100%"
          h="100%"
          borderRadius="lg"
          overflowY="hidden">

          </Box>
        </>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="100%"
        >
          <Text fontSize="3xl" pb={3} fontFamily="Work sans">
            Click on a user to start chatting
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
