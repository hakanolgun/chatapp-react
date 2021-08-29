import React from "react";
import styles from "./styles.module.css";
import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";
import ScrollableFeed from "react-scrollable-feed";

function ChatList() {
  const { messages } = useChat();

  return (
    <ScrollableFeed forceScroll={true} className={styles.chatlist}>
      {messages.map((message, key) => (
        <ChatItem key={key} item={message} />
      ))}
    </ScrollableFeed>
  );
}

export default ChatList;
