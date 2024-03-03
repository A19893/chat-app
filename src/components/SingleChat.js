import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, FormControl, IconButton, Input, Spinner, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedChat,
} from "../features/chats/chats.slice";
import { getSender, getSenderFull } from "../config/chatLogics";
import ProfileModal from "./miscellaneous/profileModal";
import UpdateGroupChatModel from "./miscellaneous/updateGroupChatModel";
import { fetch_message, send_message } from "../services/messages_service";
import ScrollableChat from "./ScrollableChat";
import './styles.css'
const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState();
  const { user } = useSelector((state) => state.user);
  const {token} = useSelector((state)=> state.user)
  const { selectedChat } = useSelector((state) => state.chats)
  const toast = useToast();
  const dispatch = useDispatch();
  const fetchMessages = async () =>{
    if(!selectedChat) return;
    try{
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const {data} = await fetch_message(selectedChat._id, config);
      console.log(data)
      setMessages(data);
      setLoading(false);
    }
    catch(error){
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Messages",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
   }
  useEffect(()=>{
   fetchMessages();
  }, [])
  const sendMessage = async(e)=>{
    if(e.key==="Enter" && newMessage){
      try{
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        setNewMessage("");
        const { data }= await send_message({
            content: newMessage,
            chatId: selectedChat._id
        }, config) 
        console.log(data)
        setMessages([...messages, data])
      }
      catch(error){
        toast({
          title: "Error Occured!",
          description: "Failed to send the Message",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    }
  }
  const typingHandler = (e) => {
    setNewMessage(e.target.value)
  }
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
                    fetchMessages={fetchMessages}
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
           {
            loading ? (
            <Spinner
             size={"xl"}
             w={20}
             h={20}
             alignSelf={"center"}
             margin={"auto"}
            />
            ):(
              <div className="messages">
                <ScrollableChat messages={messages} />
              </div>
            )
           }
           <FormControl
              onKeyDown={sendMessage}
              // id="first-name"
              isRequired
              mt={3}
            >
              {/* {istyping ? (
                <div>
                  <Lottie
                    options={defaultOptions}
                    // height={50}
                    width={70}
                    style={{ marginBottom: 15, marginLeft: 0 }}
                  />
                </div>
              ) : (
                <></>
              )} */}
              <Input
                variant="filled"
                bg="#E0E0E0"
                placeholder="Enter a message.."
                value={newMessage}
                onChange={typingHandler}
              />
            </FormControl>
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
