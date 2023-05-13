import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import db from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";
import "./TinderCards.css";

const TinderCards = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState("false");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "people"), (snapshot) =>
      setPeople(snapshot.docs.map((doc) => doc.data()))
    );
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="tinderCards__cardContainer">
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            className="card"
            style={{
              background: `url(${person.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default TinderCards;
