import React from "react";
import Chat from "./Chat";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Whats Up!"
        timestamp="1 min ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJrA7_uoz36mxU-vGalOlp4MWbkAvJXin8Pg&usqp=CAU"
      />
      <Chat
        name="Sarah"
        message="Hey! How are you"
        timestamp="5 secs ago"
        profilePic="https://i.pinimg.com/originals/4f/b5/ed/4fb5ed79960a8f68271b0c8a6e98a4eb.jpg"
      />
      <Chat
        name="Ellen"
        message="You are interesting guys"
        timestamp="23 min ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROKU61Q3KLVjYC4V6HGEzpfU1pGWrovegFQ&usqp=CAU"
      />
      <Chat
        name="Vixen"
        message="Did I Know you?"
        timestamp="34 secs ago"
        profilePic="https://www.shutterstock.com/image-photo/stunning-cute-girl-curly-brown-260nw-750408175.jpg"
      />
      <Chat
        name="Natasha"
        message="Oops! So sorry to bother you.."
        timestamp="1 sec ago"
        profilePic="https://media.istockphoto.com/id/1209951015/photo/young-woman-wearing-raincoat.jpg?s=612x612&w=0&k=20&c=wu5wvtTg3zXhYNFpYKo3QI_biQbO3iO8bJJbXvv0Auw="
      />
    </div>
  );
};

export default Chats;
