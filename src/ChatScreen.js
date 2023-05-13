import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./ChatScreen.css";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROKU61Q3KLVjYC4V6HGEzpfU1pGWrovegFQ&usqp=CAU",
      message: "Whats Up! 😍",
    },
    {
      name: "Ellen",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROKU61Q3KLVjYC4V6HGEzpfU1pGWrovegFQ&usqp=CAU",
      message: "How its going 😎",
    },
    {
      message: "Hi, How are you Ellen?",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 10/08/2020.
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              src={message.image}
              alt={message.name}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
