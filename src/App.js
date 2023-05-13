import "./App.css";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <TinderCards />
              <SwipeButtons />
            </>
          }
        />
        <Route
          path="/chat"
          element={
            <>
              <Header backButton="/" />
              <Chats />
            </>
          }
        />
        <Route
          path="/chat/:person"
          element={
            <>
              <Header backButton="/" />
              <ChatScreen />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
