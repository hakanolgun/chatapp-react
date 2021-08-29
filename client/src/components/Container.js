import { useEffect } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import styles from "./styles.module.css";

import { init, subscribeChat, subscribeInitialMessages } from "../socketApi";
import { useChat } from "../context/ChatContext";

function Container() {
  const { setMessages } = useChat();
  useEffect(() => {
    init();

    subscribeInitialMessages((messages) => {
      setMessages(messages);
    });

    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message }]);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1>Chat App</h1>
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
